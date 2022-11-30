import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import "boxicons";

export const Header = () => {
  return (
    <header>
      <div className="nav-container">
        {/* Logo */}
        <Link to={"/"}>
          <div className="logo">
            <box-icon name="home" color="#2288ff"></box-icon>
            Football Turf Management
          </div>
        </Link>

        {/* Nav list */}
        <ul className="navbar">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#sales">Sales</a>
          </li>
          <li>
            <a href="#properties">Properties</a>
          </li>
        </ul>

        {/* Name account */}
        <div className="account">
          <box-icon name="user-circle" type="solid" color="#2288ff"></box-icon>
          <h2>Duong Phuoc Long</h2>
        </div>

        {/* Login button */}
        <Link to={"/login"}>
          <button className="btn">Login</button>
        </Link>
      </div>
    </header>
  );
};
