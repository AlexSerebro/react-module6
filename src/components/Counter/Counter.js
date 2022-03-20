import React from "react";
import s from "./Counter.module.css";

class Counter extends React.Component {
  //
  // constructor() {
  //   super();

  //   this.state = {
  //     value: 0,
  //   };
  // }
  // Все що вище це аналог state
  state = { value: 0 };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  handleDicrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };
  render() {
    return (
      <div className="Counter">
        <span className="value">{this.state.value}</span>
        <div className="controls">
          <button type="button" className="btn" onClick={this.handleIncrement}>
            +1
          </button>
          <button type="button" className="btn" onClick={this.handleDicrement}>
            -1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
