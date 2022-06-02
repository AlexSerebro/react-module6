import { createStore, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'


const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case 'counter/increment':
      return state + payload;
      break;
    case 'counter/decrement':
      return state - payload;
      break;
    
    default:
      return state;
  }
};

const stepReducer = (state = 1, action) => state;


const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools() );

export default store;



// const initialState = { 
//   counter: {
//     value: 0,
//     step: 1,
//   }
// }

// const reducer = (state = initialState, {type, payload}) => {
//   switch (type) {
//     case 'counter/increment':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + payload
//         },
//       };
//       break;
//     case 'counter/decrement':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value - payload
//         }, };
//       break;
    
//     default:
//       return state;
//   }
// };

