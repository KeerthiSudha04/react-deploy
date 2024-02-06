
import { combineReducers } from 'redux';
// import dataReducer from './dataReducer'; // Import your data reducer
import counterReducer from './counterReducer'; // Import your counter reducer

// Define RootState type by combining state types of all reducers
export type RootState = {
  // data: ReturnType<typeof dataReducer>; // Use ReturnType to infer the state type of dataReducer
  counter: ReturnType<typeof counterReducer>; // Use ReturnType to infer the state type of counterReducer
};

// Combine reducers
const rootReducer = combineReducers({
  // data: dataReducer,
  counter: counterReducer,
});

export default rootReducer;

