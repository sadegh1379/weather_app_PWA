import React , {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {fetchWeather} from './api';


class App extends React.Component{

  state={
    search : '',
    
  }

  const [search , setSearch] = useState('');
  const [weather , setWeather] = useState({});
  const [show  , setShow]= useState(true);

  // handle change city
 handleChangeCity = async(e)=>{
  
    
    
    setWeather(async()=>{
      const data =await fetchWeather(search);
      return data;
    });
    setShow(false);
    // console.log('data : ' , data);
    console.log('weather : ' , weather);
   
  }


  render(){
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
              <div className="container">
                  <div className="card" >
                      {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                            <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                  <li className="list-group-item">Cras justo odio</li>
                                  <li className="list-group-item">Dapibus ac facilisis in</li>
                                  <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div className="card-body">
                                  <a href="#" className="card-link">Card link</a>
                                  <a href="#" className="card-link">Another link</a>
                            </div>
                </div>
              </div>
            )}
      </div>
    );
  }
  
}

export default App;
