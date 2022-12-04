import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout/Layout";
import "./Login.scss";

export const Login = () => {
  return (
    <Layout>
      <div className="login-form">
        <div className="form-control">
          <div className="username">Username</div>
          <input type="text" placeholder="username..." required />
        </div>
        <div className="form-control">
          <div className="password">Password</div>
          <input type="password" placeholder="password..." required />
        </div>
        <button className="button">Login</button>
        <div className="forget-password">
          <Link to={"/signup"}>Forget Password ?</Link>
        </div>
      </div>
    </Layout>
  );
};
