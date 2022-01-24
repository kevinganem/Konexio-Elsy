import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Box from "./components/Box.js";
import "./App.css";
import "./styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 190;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* WATER BOX */}
          <Box icon="local_drink" color="#3A85FF" value="1.5" unit="L" />
          {/* STEPS BOX */}
          <Box icon="directions_walk" color="black" value="3000" unit="steps" />
          {/* HEART BOX */}
          <Box icon="favorite" color="red" value="120" unit="bpm" />
          {/* TEMPERATURE BOX */}
          <Box icon="wb_sunny" color="yellow" value="-10" unit="°C" />
          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>
        </div>
      </div>
    );
  }
}

export default App;
