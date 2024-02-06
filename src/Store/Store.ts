import { createStore , applyMiddleware} from "redux";
import  counterReducer from "./Reducers/counterReducer";
import { thunk } from "redux-thunk";
 
const store = createStore(counterReducer,  applyMiddleware(thunk));
 
export default store;