import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import envConfig from '../../config/environments';

interface iUser {
	id: number,
	firstname: string,
	lastname: string,
	photo?: string,
	password: string,
}
interface UserState {
	data: iUser,
	loading: boolean
}
const initialState = {
	data: null,
	loading: true
} as UserState

export const fetchUser = createAsyncThunk(
	'user/fetchUser',
	async (data, { signal }) => {
		const source = axios.CancelToken.source()
		signal.addEventListener('abort', () => {
			source.cancel()
		})
		const res = await axios.get(`${envConfig.apiURL}/auth/login`, {
			cancelToken: source.token
		})
		
		return res.data
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
			// 
		})
		builder.addCase(fetchUser.fulfilled, (state: any, action) => {
			state.data = action.payload;
			state.loading = false;
		})
		builder.addCase(fetchUser.rejected, (state: any, action) => {
			//
		})
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer
