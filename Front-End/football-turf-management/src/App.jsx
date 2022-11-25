import React, {useState} from 'react';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
};


