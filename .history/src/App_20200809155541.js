import React , {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {fetchWeather} from './api';


function App() {
  const [search , setSearch] = useState('');
  const [weather , setWeather] = useState({});
  const [show  , setShow]= useState(true);

  // handle change city
 const handleChangeCity = async(e)=>{
  
    const data =await fetchWeather(search);
    
    setWeather(await data);
    setShow(false);
    console.log('data : ' , data);
    console.log('weather : ' , weather);
   
  }



  return (
    <div className="main-container text-center">
      <h1 className="text-center header">Weather App</h1>
          {show && (<>
            <input dir="rtl" type="text" className="form-control" placeholder="مثال : tehran " className="search-input"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
           
            />
            <button className="btn btn-secondary mt-3" onClick={handleChangeCity}>جستوجو</button>
          </>)}
          {!show && (
            <>
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap">
                          <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          </div>
                          <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                          </ul>
                          <div class="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                          </div>
              </div>
            </>
          )}
    </div>
  );
}

export default App;
