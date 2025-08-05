import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = ({ onClose, switchToLogin }) => {
  const navigate = useNavigate();

  return (
    <div className="signup-overlay">
      <div className="signup-container">
        <h2 className="signup-title">Create Account</h2>

        <input type="text" placeholder="Full Name" className="signup-input" />
        <input type="email" placeholder="Email" className="signup-input" />
        <input type="password" placeholder="Password" className="signup-input" />

        <button className="signup-button">Signup</button>

        <p className="signup-text">
          Already have an account?{" "}
          <button onClick={() => navigate("/Login")} className="login-link">
  Login
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

export default Signup;
