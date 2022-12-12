import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";
import "./Header.scss";
import "boxicons";

export const Header = () => {

  const { user, signOut } = useContext(UserContext);

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
        {user && (
          <div className="account">
            <box-icon
              name="user-circle"
              type="solid"
              color="#2288ff"
            ></box-icon>
            <h2>{user.username}</h2>
            <Link to={`/booking-list?role=${user.role}`}>
              {user.role === "owner" ? "Booking List" : "Your Booking"}
            </Link>
          </div>
        )}

        {/* Login button */}
        {user ? (
          <button
            className="btn"
            onClick={() => signOut()}
            style={{
              background: "#2288ff",
              border: "none",
              padding: "7px 25px",
              borderRadius: "5rem",
              color: "#fff",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"} className="btn">
            <button>Login</button>
          </Link>
        )}
      </div>
    </header>
  );
};
