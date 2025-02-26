import React from "react";
import { useRoutes, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home";
import LoginPage from "./components/auth/LoginPage";
import TrainerPanel from "./components/trainer/TrainerPanel";
import Navigation from "./components/layout/Navigation";
import routes from "tempo-routes";

function App() {
  const navigate = useNavigate();

  const handleAuth = () => {
    navigate("/login");
  };

  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home onTrainerSignup={handleAuth} onClientSignup={handleAuth} />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/trainer-panel" element={<TrainerPanel />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </main>
    </>
  );
}

export default App;
