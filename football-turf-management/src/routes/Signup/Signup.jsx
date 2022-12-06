import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "../../Components/Layout/Layout";
import "./Signup.scss";

export const SignupOwner = () => {
  return (
    <Layout>
      <div className="Signup-form">
        <div className="form-control">
          <div className="name">Full Name</div>
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-control">
          <div className="address">Address</div>
          <input type="address" placeholder="91 abc street...." required />
        </div>
        <div className="form-control">
          <div className="phone">Phone Number</div>
          <input type="text" placeholder="Enter Your Number" required />
        </div>
        <div className="form-control">
          <div className="image">Image</div>
          <input type="file" />
        </div>
        <div className="form-control">
          <div className="balance">Balance</div>
          <input type="number" placeholder="$0..." required />
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

export const SignupRenter = () => {
  return (
    <Layout>
      <div className="Signup-form">
        <div className="form-control">
          <div className="name">Full Name</div>
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-control">
          <div className="phone">Phone Number</div>
          <input type="text" placeholder="Enter Your Number" required />
        </div>
        <div className="form-control">
          <div className="image">Image</div>
          <input type="file" />
        </div>
        <div className="form-control">
          <div className="balance">Balance</div>
          <input type="number" placeholder="$0..." required />
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

export const Signup = () => {

  const [searchParams] = useSearchParams();

  if (searchParams.get("role") === "owner") {
    return <SignupOwner />
  }

  if (searchParams.get("role") === "renter") {
    return <SignupRenter />
  }

};