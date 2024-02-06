

// components/CounterComponent.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CounterState } from '../Store/Reducers/counterReducer'; // Adjust the path based on your project structure

const CounterComponent: React.FC = () => {
  // Use a default value for count in case state.counter is undefined
  const count = useSelector((state: { counter: CounterState }) => state.counter?.count ?? 0);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Asynchronous Operations with Redux Thunk</h1>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default CounterComponent;




