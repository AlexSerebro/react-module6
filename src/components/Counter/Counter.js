import React from "react";
import Controls from "./Controls";
import s from "./Counter.module.css";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };
  //
  // constructor() {
  //   super();

  //   this.state = {
  //     value: 0,
  //   };
  // }
  // Все що вище це аналог state
  state = { value: this.props.initialValue };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  handleDicrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <div className="Counter">
        <span className="value">{this.state.value}</span>
        <Controls
          onIncriment={this.handleIncrement}
          onDicriment={this.handleDicrement}
        />
      </div>
    );
  }
}

export default Counter;
