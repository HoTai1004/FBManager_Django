import React, {useState} from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from './Components/Header/Header';
import { Login } from './Components/Login/Login';
import { Signup } from './Components/Signup/Signup';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='*' element={<Navigate to={"/"}/>} />
      </Routes>
    </div>
  );
};


