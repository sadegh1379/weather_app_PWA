import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="main-container text-center">
      <h1 className="text-center logo">Weather App</h1>
          <input type="text" className="form-control" placeholder="...جستوجو" className="search-input"/>
    </div>
  );
}

export default App;
