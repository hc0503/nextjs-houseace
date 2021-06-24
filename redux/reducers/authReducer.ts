import Router from "next/router";
import {
	createAsyncThunk,
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit";

import { postLogin } from "../../services/AuthService";

interface IUserState extends IState {
	data: IUser[];
	loggedIn: boolean;
}
const initialState: IUserState = {
	data: [],
	loading: true,
	loggedIn: false,
};

export const login = createAsyncThunk(
	"auth/loginStatus",
	async (credential: ICredentials) => {
		const res = await postLogin(credential);

		return res.data;
	}
);
export const logout = createAsyncThunk(
	"auth/logoutStatus",
	async () => {
		// const res = await postLogin()
		// return res.data;
	}
);

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state: any, action: any) => {
			state.data = action.payload;
			state.loading = false;
			state.loggedIn = true;
			localStorage.setItem(
				"accessToken",
				action?.payload?.tokens?.accessToken?.token
			);
			Router.push("/app");
		});
		builder.addCase(logout.fulfilled, (state: any, action: any) => {
			state.data = action.payload;
			state.loading = false;
			state.loggedIn = false;
			Router.push("/");
		});
	},
});

export default authSlice.reducer;
