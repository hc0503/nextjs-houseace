import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Router from 'next/router';

import envConfig from '../../config/environments';

const initialState = {
	data: null,
	loading: true,
	loggedIn: false
} as iUserState;

export const login = createAsyncThunk(
	'auth/loginStatus',
	async (data, { signal }) => {
		const source = axios.CancelToken.source();
		signal.addEventListener('abort', () => {
			source.cancel();
		});
		const res = await axios.post(`${envConfig.apiURL}/auth/login`, {
			cancelToken: source.token
		});
		
		return res.data;
	}
);
export const logout = createAsyncThunk(
	'auth/logoutStatus',
	async (data, { signal }) => {
		const source = axios.CancelToken.source();
		signal.addEventListener('abort', () => {
			source.cancel();
		});
		const res = await axios.post(`${envConfig.apiURL}/auth/logout`, {
			cancelToken: source.token
		});

		return res.data;
	}
)

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		increment: (state) => {
			// 
		},
		decrement: (state) => {
			// 
		},
		incrementByAmount: (state, action) => {
			// 
		},
	},
	extraReducers: (builder) => {
		// Login
		builder.addCase(login.pending, (state) => {
			state.loading = true;
			state.loggedIn = false;
		});
		builder.addCase(login.fulfilled, (state: any, action) => {
			state.data = action.payload;
			state.loading = false;
			state.loggedIn = true;
			Router.push('/');
		});
		builder.addCase(login.rejected, (state: any, action) => {
			state.loading = false;
			state.loggedIn = false;
		});

		// Logout
		builder.addCase(logout.pending, (state) => {
			state.loading = true;
			state.loggedIn = true;
		});
		builder.addCase(logout.fulfilled, (state: any, action) => {
			state.data = action.payload;
			state.loading = false;
			state.loggedIn = false;
			Router.push('/');
		});
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = authSlice.actions;

export default authSlice.reducer;
