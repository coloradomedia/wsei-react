import React from 'react';
import './App.css';
import { Reset } from 'styled-reset';

import { MainPage } from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Reset />
      <MainPage/>
    </div>
  )
}

export default App;
