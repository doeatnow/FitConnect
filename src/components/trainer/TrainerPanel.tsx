import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Client {
  id: string;
  email: string;
  name?: string;
  trainerId: string;
}

const TrainerPanel = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchClients = async () => {
      try {
        const q = query(
          collection(db, "users"),
          where("trainerId", "==", user.uid),
          where("role", "==", "client"),
        );

        const querySnapshot = await getDocs(q);
        const clientsData: Client[] = [];
        querySnapshot.forEach((doc) => {
          clientsData.push({ id: doc.id, ...doc.data() } as Client);
        });

        setClients(clientsData);
      } catch (error) {
        console.error("Error fetching clients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Trainer Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{clients.length}</p>
            <p className="text-muted-foreground">Active clients</p>
            <div className="mt-4 space-y-2">
              {loading ? (
                <p className="text-muted-foreground">Loading clients...</p>
              ) : clients.length > 0 ? (
                clients.map((client) => (
                  <div
                    key={client.id}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50"
                  >
                    <Avatar>
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${client.email}`}
                      />
                      <AvatarFallback>
                        {client.email[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">
                        {client.name || "Unnamed Client"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {client.email}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No clients yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
            <p className="text-muted-foreground">Active programs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$0</p>
            <p className="text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrainerPanel;
