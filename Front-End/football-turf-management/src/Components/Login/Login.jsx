import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export const Login = () => {
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
          <Link to={"/signup"}>
            <a href="#" className='btn'>Sign up</a>
          </Link>
        </div>
      </header>

      {/* Login page */}
      <div className='login-form'>
        <div className='form-control'>
          <label htmlFor='email'>Email address</label>
          <input type="email" placeholder='example@gmail.com' required />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input type="password" placeholder='password' required />
        </div>
        <button className='button'>Login</button>    
        <div className='forget-password'>
          <Link to={"/signup"}>
            <a href="" className='abc'>Forget Password ?</a>
          </Link>
        </div>
      </div>
    </>
  );
};  