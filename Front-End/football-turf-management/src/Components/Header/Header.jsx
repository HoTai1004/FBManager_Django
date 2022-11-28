import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";
import 'boxicons';
import { Home } from '../Home/Home';

export const Header = () => {
  return (
    <>
      <header>
        <div className='nav-container'>
          {/* Logo */}
          <Link to={"/"}>
            <a href="" className='logo'>
              <box-icon name='home' color='#2288ff' ></box-icon>
              Football Turf Management
            </a>
          </Link>

          {/* Nav list */}
          <ul className='navbar'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#sales">Sales</a></li>
            <li><a href="#properties">Properties</a></li>
          </ul>

          {/* Login button */}
          <Link to={"/login"}>
            <a href="" className='btn'>Login</a>
          </Link>
        </div>
      </header>
      <Home />
    </>
  );
};