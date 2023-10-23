import { combineReducers } from "@reduxjs/toolkit";
import apiDataReducer from "./reducer/AuthDataReducer";
import actionDataReducer from "./reducer/actionDataReducer";

const rootReducer = combineReducers({
  apiData: apiDataReducer,
  actions: actionDataReducer,
});

export default rootReducer;
