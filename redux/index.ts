import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import authSlice from "./slices/authSlice";
import roleSlice from "./slices/roleSlice";

const store = configureStore({
	reducer: {
		auth: authSlice,
		role: roleSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
