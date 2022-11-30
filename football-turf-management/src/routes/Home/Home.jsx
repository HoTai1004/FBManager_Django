import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import "boxicons";
import { Layout } from "../../Components/Layout/Layout";

export const Home = () => {
  return (
    <Layout>
      <section className="home-container" id="home">
        <div className="home-text">
          <h1>
            Find Your Next Perfect
            <br />
            Football Turf To Play <br /> With Your Friends.
          </h1>
          <Link to={"/signup"}>
            <button className="btn">Sign up</button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};
