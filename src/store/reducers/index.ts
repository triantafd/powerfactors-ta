/** @format */

// src/redux/reducers/index.js
import { combineReducers } from "redux";
import characterReducer from "store/reducers/characterReducer";

const rootReducer = combineReducers({
  characters: characterReducer,
});

export default rootReducer;
