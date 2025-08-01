
/*
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
*/

import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaTwitter } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#0f0c29] flex items-center justify-center px-4">
      <div className="bg-[#19113d] text-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Log in</h2>

        {/* Email */}
        <div className="mb-4 flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white text-black">
          <FaUser className="mr-2 text-gray-600" />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-4 flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white text-black">
          <FaLock className="mr-2 text-gray-600" />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent outline-none"
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between text-sm mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <Link to="#" className="text-purple-400 hover:underline">Forgot password?</Link>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold">
          Log in
        </button>

        {/* Signup */}
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-blue-400 hover:underline">Sign up</Link>
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <span className="border-b border-white w-1/4"></span>
          <span className="mx-2 text-sm">Or login with</span>
          <span className="border-b border-white w-1/4"></span>
        </div>

        {/* Social */}
        <div className="flex justify-center space-x-4 text-2xl">
          <FaTwitter className="cursor-pointer" />
          <FcGoogle className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Login;




