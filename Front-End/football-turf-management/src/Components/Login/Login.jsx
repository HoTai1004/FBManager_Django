import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

export const Login = () => {
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
          <Link to={"/signup"}>
            <button className='btn'>Sign up</button>
          </Link>
        </div>
      </header>

      {/* Login page */}
      <div className='login-form'>
        <div className='form-control'>
          <div className='email'>Email address</div>
          <input type="email" placeholder='example@gmail.com' required />
        </div>
        <div className='form-control'>
          <div className='password'>Password</div>
          <input type="password" placeholder='password' required />
        </div>
        <button className='button'>Login</button>
        <div className='forget-password'>
          <Link to={"/signup"}>
            <a href="">Forget Password ?</a>
          </Link>
        </div>
      </div>
    </>
  );
};  