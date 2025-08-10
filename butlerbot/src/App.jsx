import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./controllers/Login";
import Signup from "./controllers/Sign";
import ProtectedRoute from "./controllers/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import GuestDash from "./pages/GuestDash";
import { auth } from "./firebase"; // Make sure this import exists

function App() {
  useEffect(() => {
    const handleUnload = () => {
      auth.signOut();
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/guest"
          element={
            <ProtectedRoute>
              <GuestDash/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
