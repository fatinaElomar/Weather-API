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
class Currentweather extends React.Component {
      constructor(props){
            super(props);
      }
      render() {
            return (
                  <div className="app">
                        <div className="section">
                              <section className="weather-bot">
                                    <section className="detail">
                                          <p>{this.props.dataList[0].dt_txt.slice(11,16)} </p>
                                          <img src={mostlycloudy} />
                                          <p>{this.props.dataList[0].main.temp} °C</p>
                                    </section>
                                    <section className="detail">
                                          <p>{this.props.dataList[1].dt_txt.slice(11,16)}  </p>
                                          <img src={mostlycloudy} />
                                          <p>{this.props.dataList[1].main.temp} °C</p>
                                    </section>
                                    <section className="detail">
                                          <p>{this.props.dataList[2].dt_txt.slice(11,16)} </p>
                                          <img src={clear} />
                                          <p>{this.props.dataList[2].main.temp}°C</p>
                                    </section>
                                    <section className="detail">
                                          <p>{this.props.dataList[3].dt_txt.slice(11,16)}</p>
                                          <img src={clear} />
                                          <p>{this.props.dataList[3].main.temp}°C</p>
                                    </section>
                                    <section className="detail">
                                          <p>{this.props.dataList[4].dt_txt.slice(11,16)}</p>
                                          <img src={clear} />
                                          <p>{this.props.dataList[4].main.temp} °C</p>
                                    </section>
                                    <section className="detail">
                                          <p>{this.props.dataList[5].dt_txt.slice(11,16)}</p>
                                          <img src={clear} />
                                          <p>{this.props.dataList[5].main.temp} °C</p>
                                    </section>
                                    <section className="detail">
                                          <p>{this.props.dataList[6].dt_txt.slice(11,16)} </p>
                                          <img src={mostlycloudy} />
                                          <p>{this.props.dataList[6].main.temp} °C</p>
                                    </section>
                              </section>
                        </div>
                  </div>
            );
      }
}

export default Currentweather

