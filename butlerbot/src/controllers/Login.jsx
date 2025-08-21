/*

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
    color: #3b3a3aff;
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
*/
// LoginPage.jsx
// LoginPage.jsx
// LoginPage.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { FaUser, FaLock } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../firebase";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff, #ff7b92);
  padding: 20px;
`;

const Card = styled.div`
  display: flex;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  overflow: hidden;
  width: 850px;
  max-width: 100%;
`;

const Left = styled.div`
  flex: 1;
  background: #fdfdfd;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: bold;
  color: #222;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 18px;

  svg {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    color: #666;
  }

  input {
    width: 100%;
    padding: 12px 12px 12px 40px;
    border: 1px solid #141010ff;
    border-radius: 8px;
    font-size: 15px;
    outline: none;
    box-sizing: border-box;

    &:focus {
      border-color: #3f51b5;
    }
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;

  input {
    margin-right: 8px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: #3f51b5;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #2c3e99;
  }
`;

const CreateAccount = styled.div`
  display: block;
  margin-top: 20px;
  text-align: center;
  font-size: 15px;
  color: #3f51b5;

  a {
    color: #3f51b5;
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const SocialLogin = styled.div`
  margin-top: 25px;
  text-align: center;

  span {
    display: block;
    margin-bottom: 12px;
    font-size: 14px;
    color: #555;
  }

  .icons {
    display: flex;
    justify-content: center;
    gap: 15px;

    button {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 18px;
      border: none;
      cursor: pointer;
      background: #db4437; /* Google red */
    }

    button:hover {
      background: #c1351d;
    }
  }
`;

const LoginPage = () => {
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
    <Container>
      <Card>
        <Left>
          <img 
            src="/undraw_designer-avatar_n5q8.png" 
            alt="Login Illustration" 
          />
        </Left>
        <Right>
          <Title>Log In</Title>

          <form onSubmit={handleEmailLogin}>
            <InputWrapper>
              <FaUser />
              <input 
                type="email" 
                placeholder="Enter email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper>
              <FaLock />
              <input 
                type="password" 
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputWrapper>

            <CheckboxWrapper>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </CheckboxWrapper>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Log In"}
            </Button>
          </form>

          <CreateAccount>
            Don't have an account? <Link to="/signup">Create one</Link>
          </CreateAccount>

          <SocialLogin>
            <span>Or login with</span>
            <div className="icons">
              <button onClick={handleGoogleLogin} disabled={isLoading}>
                {isLoading ? "..." : <FontAwesomeIcon icon={faGoogle} />}
              </button>
            </div>
          </SocialLogin>
        </Right>
      </Card>
    </Container>
  );
};

export default LoginPage;
