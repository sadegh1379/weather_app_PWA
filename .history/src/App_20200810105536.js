import React , {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {fetchWeather} from './api';


class App extends React.Component{

  state={
    search : '',
    weather : {},
    show : true
  }

  // const [search , setSearch] = useState('');
  // const [weather , setWeather] = useState({});
  // const [show  , setShow]= useState(true);

  setSearch = (e)=>{
    this.setState({
      search : e.target.value
    })
  }

  // handle change city
 handleChangeCity = async(e)=>{
  
   const data =await fetchWeather(this.state.search);
   
   this.setState({
     weather : data ,
     show : false
   })

   console.log(this.state.weather)

  }


  render(){
    const {show , search , weather} = this.state;
    return (
      <div className="main-container text-center">
        <h1 className="text-center header">Weather App</h1>
            {show && (<>
              <input dir="rtl" type="text" className="form-control" placeholder="مثال : tehran " className="search-input"
              value={search}
              onChange={(e)=>this.setSearch(e)}
             
              />
              <button className="btn btn-secondary mt-3" onClick={this.handleChangeCity}>جستوجو</button>
            </>)}
  
  
            {!show && (
              <div className="container">
                  <div className="card" >
                      {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                            <div className="card-body">
                                  <h5 className="card-title">{weather.name}</h5>
                                        <p className="card-text display-4">{weather.main.temp}&deg;c</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                  <li className="list-group-item">
                                    <img src={`http://openweathermap.org/img/wn/${weather.weather}`} alt={weather.name}/>
                                  </li>
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
