import { combineReducers } from "@reduxjs/toolkit";
import apiDataReducer from "./reducer/AuthDataReducer";
import actionDataReducer from "./reducer/actionDataReducer";
import AuthDataReducer from "./reducer/AuthDataReducer";

const rootReducer = combineReducers({
  auth: AuthDataReducer,
  actions: actionDataReducer,
});

export default rootReducer;
