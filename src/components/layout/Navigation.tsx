import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

const Navigation = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav className="w-full bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="link"
              className="text-xl font-bold"
              onClick={() => navigate("/")}
            >
              FitPal
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => navigate("/#features")}>
              Features
            </Button>
            <Button variant="ghost" onClick={() => navigate("/#pricing")}>
              Pricing
            </Button>
            {user ? (
              <>
                <Button
                  variant="ghost"
                  onClick={() => navigate("/trainer-panel")}
                >
                  Dashboard
                </Button>
                <Button variant="outline" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Button variant="default" onClick={() => navigate("/login")}>
                Login / Register
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
