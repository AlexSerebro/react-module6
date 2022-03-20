import React from "react";
import s from "./Counter.module.css";

class Counter extends React.Component {
  render() {
    return (
      <div className="Counter">
        <span className="value"></span>
        <div className="controls">
          <button type="button" className="plus"></button>
          <button type="button" className="plus"></button>
        </div>
      </div>
    );
  }
}

export default Counter;
