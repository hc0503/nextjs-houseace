import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export interface IProfileState extends IState {
	data: IProfile;
}
const initialState: IProfileState = {
	data: null,
	loading: true,
};

export const fetchProfileData = createAsyncThunk(
	"profiles/fetchDataStatus",
	async () => {
		const res = await axios.get(
			`${process.env.BASE_URL}/api/profiles`
		);
		return res.data.data;
	}
);

export const updateProfileData = createAsyncThunk(
	"profiles/updateDataStatus",
	async (userData: IProfile) => {
		const res = await axios.post(
			`${process.env.BASE_URL}/api/profiles`,
			userData
		);

		return res.data.data;
	}
);

export const profileSlice = createSlice({
	name: "profiles",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Get profile data
		builder.addCase(
			fetchProfileData.fulfilled,
			(state: IProfileState, action) => {
				state.loading = false;
				state.data = action.payload;
			}
		);
		// Update profile data
		builder.addCase(
			updateProfileData.fulfilled,
			(state: IProfileState, action) => {
				state.loading = false;
				state.data = action.payload;
			}
		);
	},
});

export default profileSlice.reducer;
