import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search"
import Myweather from "./components/Myweather";
import Currentweather from "./components/Currentweather";


class App extends Component {

  render() {
    return (
      <div className="app">

     <Search/>
      <Myweather/>
     <Currentweather/>

     </div>
    );
  }
}

export default App