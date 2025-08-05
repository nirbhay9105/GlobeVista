import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ onClose, switchToSignup }) => {
  const navigate = useNavigate();

  return (
    <div className="login-overlay">
      <div className="login-container">
        <h2 className="login-title">Login</h2>

        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />

        <button className="login-button">Login</button>

        <p className="login-text">
          Don't have an account?{" "}
        <button onClick={() => navigate("/signup")} className="signup-link">
  Signup
</button>


        </p>

        <button
          onClick={() => navigate("/")}
          className="cancel-button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Login;
