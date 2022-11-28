import React from "react";
import { Link } from "react-router-dom";
import { SelectTimeAndInfoManagement } from '../SelectTimeAndInfoManagement/SelectTimeAndInfoManagement'
import './TurfInfo.scss';

export const TurfInfo = ({ }) => {
  console.log("turf info")
  return (
    <div>
      <header>
        <div className='nav-container'>
          {/* Logo */}
          <Link to={"/"}>
            <a href="" className='logo'>
              {/* <box-icon name='home' color='#2288ff' ></box-icon> */}
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

          {/* Name account */}
          <div className='account'>
            {/* <box-icon name='user-circle' type='solid' color='#2288ff' ></box-icon> */}
            <h2>Duong Phuoc Long</h2>
          </div>

          {/* Logout button */}
          <Link to={"/"}>
            <a href="" className='btn'>Logout</a>
          </Link>
        </div>
      </header>

      <div className='title'>
        <h1>Available Turfs For Rent</h1>
        <p>
          Select time and click on the available turf to book for happy and pleasure matchs.
        </p>
      </div>

      {/* Select Time And Info Management */}
      <SelectTimeAndInfoManagement />

      {/* Number of small turfs in a big turf */}
      <div className="list-w567">

      </div>
    </div>
  );
}; 