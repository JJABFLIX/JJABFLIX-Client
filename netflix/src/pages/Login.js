import React from "react";
import LoginNav from "../components/login/LoginNav";
import "../css/Login.css";

const Login = () => {
  return (
    <div>
      <div className="login-background">
        <LoginNav />
      </div>
    </div>
  );
};

export default Login;
