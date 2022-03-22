import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activOptionIndex: 1,
  };

  setActiveIndex = (index) => {
    this.setState({
      activOptionIndex: index,
    });
  };

  makeOptionClassName = (index) => {
    const optionClasses = ["option"];

    if (index === this.state.activOptionIndex) {
      optionClasses.push("option--active");
    }
    return optionClasses.join(" ");
  };

  render() {
    const { label } = this.props.options[this.state.activOptionIndex];

    return (
      <div className="container">
        <h2 className="title">Color Picker</h2>
        <p>Choised color: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            const optionClassName = this.makeOptionClassName(index);
            return (
              <button
                key={label}
                className={optionClassName}
                style={{ backgroundColor: color }}
                onClick={() => {
                  this.setActiveIndex(index);
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
