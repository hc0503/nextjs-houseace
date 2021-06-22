import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import roleReducer from "./roleReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	role: roleReducer,
});

export default rootReducer;
