import { User } from ".prisma/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export interface IProfileState extends IState {
	data: User;
}
const initialState: IProfileState = {
	data: null,
	loading: true,
};

export const fetchProfileData = createAsyncThunk(
	"profiles/fetchDataStatus",
	async () => {
		const res = await axios.get(`/api/profiles`);
		return res.data.data;
	}
);
export const updateProfileData = createAsyncThunk(
	"profiles/updateDataStatus",
	async (data: IProfile) => {
		const res = await axios.post(`/api/profiles`, data);
		return res.data.data;
	}
);
export const updateProfilePhoto = createAsyncThunk(
	"profiles/updatePhotoStatus",
	async (data: FormData) => {
		const res = await axios.post(`/api/profiles/update-photo`, data);
		return res.data.data;
	}
);
export const updateProfileType = createAsyncThunk(
	"profiles/updateTypeStatus",
	async (data: IProfileType) => {
		const res = await axios.post(`/api/profiles/update-role`, data);
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
		// Update profile photo
		builder.addCase(
			updateProfilePhoto.fulfilled,
			(state: IProfileState, action) => {
				state.loading = false;
				state.data = action.payload;
			}
		);
		// Update profile type
		builder.addCase(
			updateProfileType.fulfilled,
			(state: IProfileState, action) => {
				state.loading = false;
				state.data = action.payload;
			}
		);
	},
});

export default profileSlice.reducer;
