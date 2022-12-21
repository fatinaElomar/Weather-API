
import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search"
import Myweather from "./components/Myweather";
import Currentweather from "./components/Currentweather";
import FakeWeather from "./components/data/FakeWeather.json";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:FakeWeather,
    }
  };
  render() {
    return (

      <div className="app">
        <Search />
        <Myweather
          /* data={this.state.FakeWeather.list[0]}*/
          temp_max={this.state.data.list[0].main.temp_max}
          temp_min={this.state.data.list[0].main.temp_min}
          pressure={this.state.data.list[0].main.pressure}
          humidity={this.state.data.list[0].main.humidity}
          src={this.state.data.list[0].weather[0].main.toLowerCase()}
          desc={this.state.data.list[0].weather[0].description}
          />
        <Currentweather dataList={this.state.data.list.slice(1, 8)} />
      </div>
    );
  }
}

export default App;