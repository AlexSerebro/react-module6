import { createStore, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import { counterReducer } from '../redux/Counter/counter-reducer'


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

