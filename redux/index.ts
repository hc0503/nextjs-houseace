import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import authSlice from "./slices/authSlice";
import roleSlice from "./slices/roleSlice";
import profileSlice from "./slices/account/profileSlice";

const store = configureStore({
	reducer: {
		auth: authSlice,
		role: roleSlice,
		profile: profileSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
