import { createStore , applyMiddleware } from "redux";
import Reducers from "./CombineReducers";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
const logger = createLogger();
const Store = createStore(
    Reducers , {}, applyMiddleware( thunk, logger) 
)
export default Store;