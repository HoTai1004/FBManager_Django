import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';

export const Signup = () => {
  return (
    <>
      <header>
        <div className='nav-container'>
          {/* Logo */}
          <div className='logo'>
            <box-icon name='home' color='#2288ff' ></box-icon>
            Football Turf Management
          </div>

          {/* Nav list */}
          <ul className='navbar'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#sales">Sales</a></li>
            <li><a href="#properties">Properties</a></li>
          </ul>

          {/* Signup button */}
          <Link to={"/login"}>
            <button className='btn'>Login</button>
          </Link>
        </div>
      </header>

      {/* Signup page */}
      <div className='Signup-form'>
        <div className='form-control'>
          <div className='name'>Full Name</div>
          <input type="text" placeholder='Your Name' required />
        </div>
        <div className='form-control'>
          <div className='email'>Email address</div>
          <input type="email" placeholder='example@gmail.com' required />
        </div>
        <div className='form-control'>
          <div className='phone'>Phone Number</div>
          <input type="text" placeholder='Enter Your Number' required />
        </div>
        <div className='form-control'>
          <div className='password'>Password</div>
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