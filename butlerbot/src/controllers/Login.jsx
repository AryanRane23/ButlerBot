import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // const handleEmailLogin = (e) => {
  //   e.preventDefault();
  //   if (!email || !password) {
  //     alert("Please enter email and password");
  //     return;
  //   }
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
    alert(`✅ Logged in as ${role}`);
    navigate(role === "admin" ? "/admin" : "/guest");
  } catch (error) {
    console.error("Firebase login error:", error.code, error.message); // <-- Add this line here
    alert("❌ Invalid email or password");
  } finally {
    setIsLoading(false);
  }
};
  //   const role = email.endsWith("@admin.com") ? "admin" : "guest";
  //   localStorage.setItem("role", role);
  //   alert(`✅ Logged in as ${role}`);
  //   navigate(role === "admin" ? "/admin" : "/guest");
  // };

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
          {/* Email */}
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

          {/* Password */}
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

          {/* Email Login Button */}
          <button type="submit" className="sign">
            Sign in
          </button>
        </form>

        {/* Divider */}
        <div className="social-message">
          <div className="line" />
          <p className="message">Login with social accounts</p>
          <div className="line" />
        </div>

        {/* Google Login */}
        <div className="social-icons">
          <button
            aria-label="Log in with Google"
            className="icon"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              "Loading..."
            ) : (
              <FontAwesomeIcon icon={faGoogle} size="lg" />
            )}
          </button>
        </div>

        {/* Sign up */}
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
  background: linear-gradient(to bottom right, #0f0c29, #302b63, #24243e);

  .form-container {
    width: 320px;
    border-radius: 0.75rem;
    background-color: rgba(17, 24, 39, 1);
    padding: 2rem;
    color: rgba(243, 244, 246, 1);
  }

  .title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
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
    color: rgba(156, 163, 175, 1);
    margin-bottom: 4px;
    font-size: 0.875rem;
    position: absolute;
    left: 363px;
    margin-top: -19px;
    margin-left: 226px;
  }

  .input-group input {
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid rgba(55, 65, 81, 1);
    background-color: rgba(17, 24, 39, 1);
    padding: 0.75rem 1rem;  
    color: rgba(243, 244, 246, 1);
    outline: none;
    position:relative;
    left:-16px;
    text-align: left;
    margin-bottom: 14px;
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
    background-color: rgba(167, 139, 250, 1);
    padding: 0.75rem;
    text-align: center;
    color: rgba(17, 24, 39, 1);
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
    color: rgba(156, 163, 175, 1);
    text-align: center;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .icon {
    background: white;
    border-radius: 50%; /* make it round */
    padding: 0.75rem;
    cursor: pointer;
    border: none;
    font-size: 1.25rem;
    color: #000000; /* Google blue */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .signup {
    text-align: center;
    font-size: 0.75rem;
    color: rgba(156, 163, 175, 1);
  }

  .link {
    color: rgba(167, 139, 250, 1);
    text-decoration: none;
  }
`;
