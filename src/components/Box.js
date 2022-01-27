import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

class Box extends React.Component {
  constructor() {
    super();

    this.state = { needSlider: true };
  }

  showSlider() {
    this.setState({ needSlider: true });
  }

  hideSlider() {
    this.setState({ needSlider: false });
  }

  render() {
    const needSlider = this.state.needSlider;
    let slider;
    if (needSlider) {
      slider = (
        <Slider
          type="range"
          min={this.props.min}
          max={this.props.max}
          defaultValue={this.props.value}
          onChange={(value) => this.props.onChangeVal(value)}
          step="1"
        />
      );
    } else {
      slider = this.hideSlider();
    }
    return (
      <div className="box col-sm-3 col-6">
        {/* ICONES */}
        <span
          className="material-icons"
          style={{ fontSize: "100px", color: this.props.color }}
        >
          {this.props.icon}
        </span>
        {/* TEXT VALUES */}
        <p>
          {this.props.value} {this.props.unit}
        </p>
        {slider}
      </div>
    );
  }
}

export default Box;
