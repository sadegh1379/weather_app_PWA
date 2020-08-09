import React , {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {fetchWeather} from './api';


function App() {
  const [search , setSearch] = useState('');
  const [weather , setWeather] = useState({});

 const handleChangeCity = async(e)=>{
   if(ket)

     const data =await fetchWeather(search);
     setWeather(await data);
     console.log('data : ' , data);
     console.log('weather : ' , weather);

  }
  return (
    <div className="main-container text-center">
      <h1 className="text-center header">Weather App</h1>
          <input dir="rtl" type="text" className="form-control" placeholder="جستوجو" className="search-input"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          onKeyPress={()=>handleChangeCity}
          />
    </div>
  );
}

export default App;
