import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../../Components/Layout/Layout";
import { UserContext } from "../../contexts/userContext";
import "./Login.scss";

export const Login = () => {

  const navigate = useNavigate();

  const { signIn } = useContext(UserContext);

  const [state, setState] = useState({ username: "", password: "" });

  return (
    <Layout>
      <div className="login-form">
        <div className="form-control">
          <div className="username">Username</div>
          <input
            type="text"
            placeholder="username..."
            value={state.username}
            onChange={(e) => setState({ ...state, username: e.target.value })}
            required
          />
        </div>
        <div className="form-control">
          <div className="password">Password</div>
          <input
            type="password"
            placeholder="password..."
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
            required
          />
        </div>
        <button
          className="button"
          onClick={async () => {
            const user = await signIn(state);
            navigate("/turflist");
          }}
        >
          Login
        </button>
        <div className="forget-password">
          <Link to={""}>Forget Password ?</Link>
        </div>
      </div>
    </Layout>
  );
};
