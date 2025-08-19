

import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userEmail = userCredential.user.email;
      const role = userEmail.endsWith("@admin.com") ? "admin" : "guest";
      localStorage.setItem("role", role);
      const token = await userCredential.user.getIdToken();
      localStorage.setItem("token", token);

      alert(`✅ Logged in as ${role}`);
      navigate(role === "admin" ? "/admin" : "/guest");
    } catch (error) {
      console.error("Firebase login error:", error.code, error.message);
      alert("❌ Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      const userEmail = result.user.email;
      const role = userEmail.endsWith("@admin.com") ? "admin" : "guest";
      localStorage.setItem("role", role);
      localStorage.setItem("token", token);
      alert(`✅ Logged in as ${role}`);
      navigate(role === "admin" ? "/admin" : "/guest");
    } catch (err) {
      console.error(err);
      alert("❌ Google login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledWrapper>
      <div className="form-container">
        <p className="title">Login</p>

        <form className="form" onSubmit={handleEmailLogin}>
          <div className="input-group">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              name="username"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <div className="forgot">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>

          <button type="submit" className="sign">
            Sign in
          </button>
        </form>

        <div className="social-message">
          <div className="line" />
          <p className="message">Login with social accounts</p>
          <div className="line" />
        </div>

        <div className="social-icons">
          <button
            aria-label="Log in with Google"
            className="icon"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : <FontAwesomeIcon icon={faGoogle} size="lg" />}
          </button>
        </div>

        <p className="signup">
          Don't have an account?{" "}
          <Link to="/signup" className="link">
            Sign up
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

  /* Match landing page gradient */
  background: linear-gradient(90deg, #f1f3f6ff 0%, #f9a8d4 100%);
  background-size: cover;

  .form-container {
    width: 320px;
    border-radius: 0.75rem;
    background-color: rgba(247, 248, 249, 1);
    padding: 2rem;
    color: white;
  }

  .title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: black; /* ✅ Make it visible */
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
    color: #3b3a3aff;
    margin-bottom: 6px; /* more space between label and input */
    font-size: 0.875rem;
  }

  .input-group input {
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid rgba(2, 6, 17, 1);
    background-color: rgba(200, 200, 241, 1);
    padding: 0.85rem 0.2rem; /* more padding inside */
    color: #111;
    outline: none;
  }
.form-container {
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

  .input-group input:focus {
    border-color: rgba(167, 139, 250);
  }

  .forgot {
    display: flex;
    justify-content: flex-end;
    font-size: 0.75rem;
    margin-top: 0.25rem;
    width: 100%;
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

  .signup {
    text-align: center;
    font-size: 0.75rem;
    color: rgba(112, 15, 76, 1);
  }

  .link {
    color: rgba(81, 7, 72, 1);
    text-decoration: none;
  }
    .sign:hover {
  background: rgba(81, 67, 137, 1);
  transform: scale(1.02);
  transition: all 0.2s ease;
}

.icon:hover {
  background: #f1f1f1;
  transform: scale(1.1);
}

`;
