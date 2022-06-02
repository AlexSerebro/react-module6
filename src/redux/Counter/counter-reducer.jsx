import { combineReducers } from 'redux';
import {INCREMENT, DECREMENT} from './counter-types'


const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;
      break;
    case DECREMENT:
      return state - payload;
      break;
    
    default:
      return state;
  }
};

const stepReducer = (state = 1, action) => state;


export  const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});