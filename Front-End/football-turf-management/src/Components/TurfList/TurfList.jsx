import React from 'react';
import { Link } from 'react-router-dom';
import { SearchTurf } from '../SearchTurf/SearchTurf';
import { Turf } from '../Turf/Turf';
import './TurfList.scss';

export const TurfList = () => {
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

          {/* Name account */}
          <div className='account'>
            <box-icon name='user-circle' type='solid' color='#2288ff' ></box-icon>
            <h2>Duong Phuoc Long</h2>
          </div>

          {/* Logout button */}
          <Link to={"/"}>
            <a href="" className='btn'>Logout</a>
          </Link>
        </div>
      </header>

      <div className='title'>
        <h1>Properties For Rent</h1>
        <p>
          Search over 2000 properties to rent from the top agents in the city.
        </p>
      </div>

      {/* Search For Turf list */}
      <SearchTurf />

      {/* Turf list */}
      <div className='rent-center list'>
        {turfs.map((turf, i) => {
          return (
            <Turf
              key={i}
              label={turf.label}
              imgSrc={turf.src}
              price={turf.price}
            />
          )
        })}
      </div>
    </>
  );
};

const turfs = [
  { label: "Football turf in Chuyen Viet", price: 700, src: require("../../Images/p1.jpg"), },
  { label: "Football turf in Tuyen Son", price: 200, src: require("../../Images/p2"), },
  { label: "Football turf in Duy Tan", price: 300, src: require("../../Images/p3"), },
  { label: "Football turf in Truong Chinh", price: 400, src: require("../../Images/p4"), },
  { label: "Football turf in Trung Nu Vuong", price: 100, src: require("../../Images/p5"), },
  { label: "Football turf in Trang Hoang", price: 350, src: require("../../Images/p6"), },
  { label: "Football turf in Ba Dinh", price: 450, src: require("../../Images/p7"), },
  { label: "Football turf in My Nhat Quang", price: 550, src: require("../../Images/p2"), },

]