import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

export const Signup = () => {
  return (
    <>
      <header>
        <div className='nav container'>
          {/* Logo */}
          <a href="" className='logo'>
            <box-icon name='home' color='#2288ff' ></box-icon>
            Football Turf Management
          </a>

          {/* Menu icon */}
          <input type="checkbox" name="" id="menu" />
          <label htmlFor="menu">
            <box-icon name='menu' id="menu-icon"></box-icon>
          </label>

          {/* Nav list */}
          <ul className='navbar'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#sales">Sales</a></li>
            <li><a href="#properties">Properties</a></li>
          </ul>

          {/* Signup button */}
          <Link to={"/login"}>
            <a href="#" className='btn'>Login</a>
          </Link>
        </div>
      </header>

      {/* Signup page */}
      <div className='Signup-form'>
        <div className='form-control'>
          <label htmlFor='name'>Full Name</label>
          <input type="text" placeholder='Your Name' required />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email address</label>
          <input type="email" placeholder='example@gmail.com' required />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Phone Number</label>
          <input type="text" placeholder='Enter Your Number' required />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input type="password" placeholder='At Least 8 characters' required />
        </div>
        <button className='button'>Signup</button>    
        <div className='Already-Account'>
          <Link to={"/login"}>
            <a href="" className='abc'>Already have account</a>
          </Link>
        </div>
      </div>
    </>
  );
};