import React from "react";
import s from './Counter.module.css'

const Controls = ({ step, onDicriment, onIncriment }) => {
  return (
    <div className={s.controls}>
      <button type="button" className="btn" onClick={onIncriment}>
        збільшити на {step}
      </button>
      <button type="button" className="btn" onClick={onDicriment}>
        зменшити на {step}
      </button>
    </div>
  );
};

export default Controls;
