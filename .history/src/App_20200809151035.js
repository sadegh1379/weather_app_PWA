import React , {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {fetchWeather} from './api';


function App() {
  const [search , setSea]
  return (
    <div className="main-container text-center">
      <h1 className="text-center header">Weather App</h1>
          <input type="text" className="form-control" placeholder="...جستوجو" className="search-input"/>
    </div>
  );
}

export default App;