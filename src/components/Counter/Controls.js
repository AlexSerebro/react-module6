import React from "react";
import s from './Counter.module.css'

const Controls = ({ onDicriment, onIncriment }) => {
  return (
    <div className={s.controls}>
      <button type="button" className="btn" onClick={onIncriment}>
        +1
      </button>
      <button type="button" className="btn" onClick={onDicriment}>
        -1
      </button>
    </div>
  );
};

export default Controls;
