import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import roleReducer from "./roleReducer";
import profileReducer from "./account/profileReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	role: roleReducer,
	profile: profileReducer,
});

export default rootReducer;
