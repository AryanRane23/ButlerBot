import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
// import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    if (isLoading) return; // Prevent multiple clicks

    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      // await axios.post("http://localhost:5000/api/auth/verify", { token });

      localStorage.setItem("token", token);
      alert("✅ Logged in successfully!");
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert("❌ Login failed. Check popup blocker or backend status.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDummyLogin = () => {
    alert(`Trial login with email: ${email}, password: ${password}`);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={handleDummyLogin}
        className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded mb-3 transition duration-200"
      >
        Login (Trial)
      </button>

      <button
        onClick={handleGoogleLogin}
        disabled={isLoading}
        className={`w-full ${
          isLoading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        } text-white py-2 rounded transition duration-200`}
      >
        {isLoading ? "Signing in..." : "Sign in with Google"}
      </button>
    </div>
  );
}

export default Login;
