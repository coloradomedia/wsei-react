import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MainPage } from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <MainPage/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
