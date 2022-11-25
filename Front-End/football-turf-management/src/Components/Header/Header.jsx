import React, {Component} from 'react';
import "./Header.css";
import 'boxicons';

export const Header = () => {
  return (
    <header>
      <div className='nav container'>
        {/* Logo */}
        <a href="" className='logo'>
          <i className='bx bx-home'></i>
          Football Turf Management
        </a>

        {/* Menu icon */}
        <input type="checkbox" name="" id="menu" />
        <label htmlFor="menu">
          <i className='bx bx-menu' id='menu-icon'></i>
        </label>

        {/* Nav list */}
        <ul className='navbar'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Sale</a></li>
          <li><a href="">Properties</a></li>
        </ul>

        {/* Login button */}
        <a href="" className='btn'>Login</a>
      </div>
    </header>
  )
}