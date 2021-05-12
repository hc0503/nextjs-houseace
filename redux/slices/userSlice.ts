import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import cookie from 'js-cookie';
import Router from 'next/router';

import envConfig from '../../config/environments';

const initialState = {
	data: null,
	loading: true,
} as iUserState

export const fetchUser = createAsyncThunk(
	'user/fetchUser',
	async (data, { signal }) => {
		const source = axios.CancelToken.source()
		signal.addEventListener('abort', () => {
			source.cancel()
		});
		const res = await axios.post(`${envConfig.apiURL}/auth/login`, {
			cancelToken: source.token
		});
		
		return res.data;
	}
)

export const userSlice = createSlice({
	name: 'user',
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
		builder.addCase(fetchUser.pending, (state) => {
			state.loading = true;
		})
		builder.addCase(fetchUser.fulfilled, (state: any, action) => {
			state.data = action.payload;
			state.loading = false;
			cookie.set('loggedin', true);
			Router.push('/');
		})
		builder.addCase(fetchUser.rejected, (state: any, action) => {
			state.loading = false;
			cookie.remove('loggedin');
		})
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
