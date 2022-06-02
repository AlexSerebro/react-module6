import React from 'react';
import s from './Counter.module.css'

const Value = ({ value }) =>
  <span className={s.value}>{value}</span>;

export default Value;