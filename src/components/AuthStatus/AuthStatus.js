import React from "react";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import "./AuthStatus.css";

function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return (
      <div className="auth">
        <button className="button__green" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    );
  }
  return (
    <div className="auth">
      <p className="auth-message">Bem vindo {auth.user.name}!</p>
      <button
        className="button__green"
        onClick={() => {
          auth.logout(() => navigate("/"));
        }}
      >
        Sair
      </button>
    </div>
  );
}

export default AuthStatus;
