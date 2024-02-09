// actions.ts


// import { INCREMENT, DECREMENT } from './actionTypes';

// export const increment = () => ({ type: 'INCREMENT' });
// export const decrement = () => ({ type: 'DECREMENT' });

import { Dispatch } from "redux";
 
export const increment= (count: number) => {
  return (dispatch:Dispatch) => {
    dispatch({
      type: 'INCREMENT',
      payload: count ,
    });
  };
};
 
export const decrement = (count: number) => {
  return (dispatch:Dispatch) => {
    dispatch({
      type: 'DECREMENT',
      payload: count ,
    });
  };
};
