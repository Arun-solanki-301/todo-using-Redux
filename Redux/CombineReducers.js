import { combineReducers } from "redux";
import TodoReducer from "./Reducers";
const Reducers = combineReducers(
    {
        TodoData : TodoReducer
    }
)
export default Reducers;