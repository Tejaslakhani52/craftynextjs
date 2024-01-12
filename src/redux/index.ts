import { combineReducers } from "@reduxjs/toolkit";
import apiDataReducer from "./reducer/AuthDataReducer";
import actionDataReducer from "./reducer/actionDataReducer";
import AuthDataReducer from "./reducer/AuthDataReducer";
import templateDataReducer from "./reducer/templateDataReducer";

const rootReducer = combineReducers({
  auth: AuthDataReducer,
  actions: actionDataReducer,
  tempData: templateDataReducer,
});

export default rootReducer;
