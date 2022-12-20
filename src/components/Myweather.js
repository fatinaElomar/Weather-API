import React, { Component } from "react";
import "../App.css";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

class Myweather extends React.Component{
    
    render() {
      return (
        <div className="app">
      <main className="container">
        <div className="weather-mid">
          <div className="first">
        <img src={mostlycloudy} alt="partlycloudy image" className="center" ></img>
        <p className="temp">overcast clouds</p>
        </div>
       <div className="info">
        <p><span className="temperature">Temperature</span> &nbsp; 10 &#xb0; to &#8451;</p>
            <p className="tempers"><span className="humidity">Humidity</span>&nbsp; 78%&nbsp; <span className="pressure">&nbsp;pressure</span> &nbsp;1008.48</p>
            </div>
        </div> 
        </main>
       </div>
   );
}
}

export default Myweather

