import React, { Component } from "react";
import "../App.css";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";


class Myweather extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const imageSrc = (image) => {
      if (image === ("clear")) return clear;
      else if (image === "mostlycloudy") return mostlycloudy;
      else if (image === "partlycloudy") return partlycloudy;
      else if (image === ("snow")) return snow;
      else if (image === ("cloudy")) return cloudy;
      else if (image === ("storm")) return storm;
      else if (image === ("Rain")) return rain;
      else if (image === ("fog")) return fog;
      else if (image === ("drizzle")) return drizzle;
    };

    return (
      <div className="app">
        <main className="container">
          <div className="weather-mid">
            <div className="first">
              <img src={imageSrc(this.props.src)} alt="partlycloudy image" className="center" ></img>
              <p className="temp">{this.props.desc}</p>
            </div>
            <div className="info">
              <p><span className="temperature">Temperature</span> &nbsp; <span className="tempers">{Math.round(this.props.temp_max -273)} &#xb0; to {Math.round(this.props.temp_min -273)}&#8451;</span></p>
              <p className="tempers"><span className="humidity">Humidity</span>&nbsp;{this.props.humidity}% &nbsp; <span className="pressure">&nbsp;pressure</span> &nbsp;{this.props.pressure}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Myweather

