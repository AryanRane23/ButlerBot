import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // import your firebase config

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      } else {
        setChecking(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  if (checking) return <p>Checking auth...</p>;

  return children;
}

export default ProtectedRoute;