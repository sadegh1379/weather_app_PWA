import React , {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import gif from './gif/loader2.gif';
import CountUp from 'react-countup';
import {fetchWeather} from './api';
import Navbar from './component/navbar';
import {Link , Switch} from 'react-router-dom';


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
   if(this.state.search=== ''){
     alert("لطفا شهر خود را وارد کنید");
     return
   }
  
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
      <>
      <Navbar/>
          <Switch>
                  <
          </Switch>
      <div className="main-container text-center">
              <input dir="rtl" type="text" className="form-control" placeholder="مثال : تهران " className="search-input"
              value={search}
              onChange={(e)=>this.setSearch(e)}
              />
              <button className=" search-btn" onClick={this.handleChangeCity}>جستوجو</button>
              
              {loading && (
                <img className="mt-4" src={gif} style={{width:'50px' , backgroundColor:'black' , borderRadius:'50px' }}/>
              )}
         
              {/* card component */}

              {weather.main && !loading && (<div className="container mt-2 text-center">
                  <div className="card card-sm card-secondary " >
                      {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                            <div className="card-body">
                                  <h5 className="card-title h2">{weather.name}</h5>
                                  <p className="card-text h1">
                                  <CountUp       
                                    end={weather.main.temp}
                                    duration={2.75}
                                    />
                                     &deg;c  </p>
                                   
                            </div>
                            <ul className="list-group list-group-flush ">
                                  <li className="list-group-item ">
                                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.name}/>
                                    <h4 style={{fontSize:'bold'}}>{weather.weather[0].description}</h4>
                                  </li>
                            </ul>  
                </div>
              </div>)
  }
            
      </div>

      </>
    );
  }
  
}

export default App;
