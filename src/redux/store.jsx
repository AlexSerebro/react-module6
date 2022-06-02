import { createStore } from 'redux';

const initialState = { counterValue: 0 }

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'counter/inctement':
      return { counterValue: state.counterValue + payload, };
      break;
    case 'counter/denctement':
      return { counterValue: state.counterValue - payload, };
      break;
    
    default:
      return state;
  }
};

const store = createStore(reducer );

export default store;