

import { combineReducers } from 'redux';

export interface CounterState {
  count: number;
}

const initialCounterState: CounterState = {
  count: 0,
};

const counterReducer = (state = initialCounterState, action: any): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default combineReducers({
  counter: counterReducer,
  // Other reducers can be added here if needed
});
