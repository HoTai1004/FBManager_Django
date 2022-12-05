import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout/Layout";
import "./Signup.scss";

export const Signup = () => {
  return (
    <Layout>
      <div className="Signup-form">
        <div className="form-control">
          <div className="name">Full Name</div>
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-control">
          <div className="email">Email address</div>
          <input type="email" placeholder="example@gmail.com" required />
        </div>
        <div className="form-control">
          <div className="phone">Phone Number</div>
          <input type="text" placeholder="Enter Your Number" required />
        </div>
        <div className="form-control">
          <div className="password">Password</div>
          <input type="password" placeholder="At Least 8 characters" required />
        </div>
        <button className="button">
          Signup
        </button>
        <div className="Already-Account">
          <Link to={"/login"}>
            <a href="" className="abc">
              Already have account
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
