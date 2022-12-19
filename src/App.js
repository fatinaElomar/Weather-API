import React, { Component } from "react";
import "./App.css";
import mostlycloudy from "../src/img/weather-icons/mostlycloudy.svg";
import clear from "../src/img/weather-icons/clear.svg";


class App extends Component {

  render() {
    return (
      <div className="app">

       <header className="head">
       <input type="text" name="weather" className="input_city" placeholder="Type in a city name" />
       <button className="btn">FIND WEATHER</button>
       </header>

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
       

        <div className="section">
        <section className="weather-bot">
        <section className="detail">
                    <p>03:00 </p>
                    <img src={mostlycloudy} />
                    <p>8°C</p>
              </section>
              <section className="detail">
                    <p>06:00 </p>
                    <img src={mostlycloudy}  />
                    <p>9°C</p>
              </section>
              <section className="detail">
                    <p>09:00 </p>
                    <img src={clear}  />
                    <p>14°C</p>
              </section>
              <section className="detail">
                    <p>12:00 </p>
                    <img src={clear}  />
                    <p>17°C</p>
              </section>
              <section className="detail">
                    <p>15:00 </p>
                    <img src={clear} />
                    <p>18°C</p>
              </section>
              <section className="detail">
                    <p>18:00 </p>
                    <img src={clear}  />
                    <p>16°C</p>
              </section>
              <section className="detail">
                    <p>21:00 </p>
                    <img src={mostlycloudy}  />
                    <p>13°C</p>
              </section>
        </section>
      
        </div>
      </div>
    );
  }
}

export default App