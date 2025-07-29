import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
    else setChecking(false);
  }, []);

  if (checking) return <p>Checking auth...</p>;

  return children;
}

export default ProtectedRoute;