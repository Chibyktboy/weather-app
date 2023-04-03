import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=5049839c6a4a99694514e409c14582fb`

  const searchLocation = (event) => {
    
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    
    
  }
 
  
  

  return (
    <div className="app">
      <div className="search">
        <h3>Chi-Tech</h3>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          
          placeholder='Enter Location'
          type="text" />
          <button className='submit-btn' onClick={searchLocation}>SUBMIT</button>
      </div>
      <div className="container">
        <div className="top">
        <div className="temp">
            {data.main ?<div><p>Country:</p> <h1>{data.sys.country}</h1></div> : null}
          </div>
          <div className="location">
            <h2>Location :  {data.name}</h2>
          </div>
          <div className="temp">
            {data.main ?<h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
          <div className="main">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default App;
