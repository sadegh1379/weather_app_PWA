import React , {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import gif from './gif/loader2.gif';
import CountUp from 'countup';
import {fetchWeather} from './api';


class App extends React.Component{

  state={
    search : '',
    weather : {},
    
    loading : false
  }

  setSearch = (e)=>{
    this.setState({
      search : e.target.value
    })
  }

  // handle change city
 handleChangeCity = async(e)=>{
  
  // set true loading for search

  this.setState({
    loading : true
  })
   const data =await fetchWeather(this.state.search);
  
   this.setState({
     weather : data ,
     

     loading : false
   })

   

   console.log(this.state.weather)

  }


  render(){
    const { loading ,  search , weather} = this.state;
    return (
      <div className="main-container text-center">
        <h1 className="text-center header ">Weather App</h1>
              {loading && (
                <img src={gif} style={{width:'60px' , backgroundColor:'black' , borderRadius:'50px'}}/>
              )}
            
              <input dir="rtl" type="text" className="form-control" placeholder="مثال : tehran " className="search-input"
              value={search}
              onChange={(e)=>this.setSearch(e)}
             
              />
              <button className=" search-btn" onClick={this.handleChangeCity}>جستوجو</button>
            
              
              
            
              {weather.main && (<div className="container mt-4">
                  <div className="card card-sm" >
                      {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                            <div className="card-body">
                                  <h5 className="card-title">{weather.name}</h5>
                                        <p className="card-text display-4"> </>   &deg;c  </p>
                            </div>
                            <ul className="list-group list-group-flush">
                                  <li className="list-group-item">
                                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.name}/>
                                    <p>{weather.weather[0].description}</p>
                                  </li>
                                   {/* <li className="list-group-item"><span className="text-right h3">سرعت وزش باد</span>  <span className="text-left h3">{weather.wind.speed}</span></li> */}
                                 
                            </ul>
                            
                </div>
              </div>)
  }
            
      </div>
    );
  }
  
}

export default App;
