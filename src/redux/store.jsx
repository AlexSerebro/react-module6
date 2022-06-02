import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState = { 
  counter: {
    value: 0,
    step: 1,
  }
}

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'counter/increment':
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + payload
        },
      };
      break;
    case 'counter/decrement':
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value - payload
        }, };
      break;
    
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools() );

export default store;