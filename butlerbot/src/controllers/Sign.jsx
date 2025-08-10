/*
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Signup clicked: ${username}, Remember: ${remember}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg flex max-w-4xl w-full overflow-hidden">

       
        <div className="w-1/2 bg-white flex items-center justify-center p-6">
          <img
            src="/signup-art.png" // Place your new image in public folder
            alt="Signup Art"
            className="max-w-xs h-auto"
          />
        </div>

        
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign up</h2>
          <form onSubmit={handleSignup}>

            <div className="mb-4 flex items-center border border-gray-300 rounded-md p-2">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                placeholder="Your Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full focus:outline-none"
              />
            </div>

            <div className="mb-4 flex items-center border border-gray-300 rounded-md p-2">
              <FaLock className="text-gray-500 mr-3" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full focus:outline-none"
              />
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="mr-2"
              />
              <label className="text-sm text-gray-600">Remember me</label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold transition duration-200"
            >
              Log in
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-600 text-center">
            <p>Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Or login with</p>
            <div className="flex justify-center gap-4 mt-2">
              <button className="bg-blue-600 text-white p-2 rounded-full">f</button>
              <button className="bg-blue-400 text-white p-2 rounded-full">t</button>
              <button className="bg-red-500 text-white p-2 rounded-full">G</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
*/

import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("✅ Account created successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error.code, error.message);
      alert("❌ Signup failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await signInWithPopup(auth, provider);
      alert("✅ Account created with Google!");
      navigate("/guest");
    } catch (err) {
      console.error(err);
      alert("❌ Google signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledWrapper>
      <div className="form-container">
        <p className="title">Sign Up</p>

        <form className="form" onSubmit={handleSignup}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />
          </div>

          <button type="submit" className="sign">
            {isLoading ? "Signing up..." : "Sign up"}
          </button>
        </form>

        <div className="social-message">
          <div className="line" />
          <p className="message">Or sign up with</p>
          <div className="line" />
        </div>

        <div className="social-icons">
          <button
            aria-label="Sign up with Google"
            className="icon"
            onClick={handleGoogleSignup}
            disabled={isLoading}
          >
            <FontAwesomeIcon icon={faGoogle} size="lg" />
          </button>
        </div>

        <p className="signup">
          Already have an account?{" "}
          <Link to="/login" className="link">
            Login
          </Link>
        </p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #f1f3f6ff 0%, #f9a8d4 100%);
  background-size: cover;

  .form-container {
    width: 320px;
    border-radius: 0.75rem;
    background-color: rgba(247, 248, 249, 1);
    padding: 2rem;
    color: white;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }

  .title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: black;
  }

  .form {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .input-group label {
    color: #3b3a3a;
    margin-bottom: 6px;
    font-size: 0.875rem;
  }

  .input-group input {
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid rgba(2, 6, 17, 1);
    background-color: rgba(200, 200, 241, 1);
    padding: 0.85rem 0.2rem;
    color: #111;
    outline: none;
  }

  .input-group input:focus {
    border-color: rgba(167, 139, 250);
  }

  .sign {
    background: rgba(99, 87, 137, 1);
    padding: 0.75rem;
    text-align: center;
    color: white;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
  }

  .sign:hover {
    background: rgba(81, 67, 137, 1);
    transform: scale(1.02);
    transition: all 0.2s ease;
  }

  .social-message {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    gap: 0.5rem;
  }

  .line {
    flex: 1;
    height: 1px;
    background-color: rgba(55, 65, 81, 1);
  }

  .message {
    font-size: 0.875rem;
    color: rgba(36, 67, 120, 1);
    text-align: center;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .icon {
    background: white;
    border-radius: 50%;
    padding: 0.75rem;
    cursor: pointer;
    border: none;
    font-size: 1.25rem;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon:hover {
    background: #f1f1f1;
    transform: scale(1.1);
  }

  .signup {
    text-align: center;
    font-size: 0.75rem;
    color: rgba(112, 15, 76, 1);
  }

  .link {
    color: rgba(81, 7, 72, 1);
    text-decoration: none;
  }
`;
