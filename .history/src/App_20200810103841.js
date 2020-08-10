import React , {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {fetchWeather} from './api';


class App extends React.Component{

  const [search , setSearch] = useState('');
  const [weather , setWeather] = useState({});
  const [show  , setShow]= useState(true);

  // handle change city
 const handleChangeCity = async(e)=>{
  
    
    
    setWeather(async()=>{
      const data =await fetchWeather(search);
      return data;
    });
    setShow(false);
    // console.log('data : ' , data);
    console.log('weather : ' , weather);
   
  }


  render(){

  }
  
}

export default App;
