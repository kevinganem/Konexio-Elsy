import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Box from "./components/Box.js";
import "./App.css";
import "./styles/global.css";

const tempMin = -20,
  tempMax = 40,
  heartMin = 80,
  heartMax = 190,
  stepsMin = 0,
  stepsMax = 50000;

class App extends React.Component {
  constructor() {
    super();
    this.onHeartChange = this.onHeartChange.bind(this);
    this.changeSteps = this.changeSteps.bind(this);
    this.changeTemp = this.changeTemp.bind(this);

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
    };
  }

  onHeartChange = (value) => {
    this.setState({ heart: value });
  };

  changeSteps = (value) => {
    this.setState({ steps: value });
  };

  changeTemp = (value) => {
    this.setState({ temperature: value });
  };

  calculWater = (heart, temperature, steps) => {
    let tempWater = this.state.water;

    if (this.state.temperature > 20) {
      let diffTemp = (this.state.temperature - 20) * 0.02;
      tempWater = tempWater + diffTemp;
    }
    if (this.state.heart > 120) {
      let diffHeart = (this.state.heart - 120) * 0.0008;
      tempWater = tempWater + diffHeart;
    }
    if (this.state.steps > 10000) {
      let diffSteps = (this.state.steps - 10000) * 0.00002;
      tempWater = tempWater + diffSteps;
    }

    return tempWater.toFixed(2);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* WATER BOX */}
          <Box
            icon="local_drink"
            color="#3A85FF"
            value="1.5"
            unit="L"
            showSlider="false"
          />

          {/* STEPS BOX */}
          <Box
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            max={stepsMax}
            min={stepsMin}
            unit="steps"
            onChangeVal={this.changeSteps}
            showSlider="true"
          />

          {/* HEART BOX */}
          <Box
            icon="favorite"
            color="red"
            value={this.state.heart}
            max={heartMax}
            min={heartMin}
            unit="BPM"
            onChangeVal={this.onHeartChange}
            showSlider="true"
          />

          {/* TEMPERATURE BOX */}
          <Box
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            max={tempMax}
            min={tempMin}
            unit="°C"
            onChangeVal={this.changeTemp}
            showSlider="true"
          />
        </div>
      </div>
    );
  }
}

export default App;
