import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import layout from "./layout";

export default combineReducers({ tasksReducer, layout });
