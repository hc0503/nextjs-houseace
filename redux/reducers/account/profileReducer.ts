import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
	getFetchProfileData,
	postUpdateProfileData,
	postUpdateProfilePhoto,
	postUpdateProfileType,
} from "../../../services/profileService";

export interface IProfileState extends IState {
	data: IUser;
}
const initialState: IProfileState = {
	data: null,
	loading: true,
};

export const fetchProfileData = createAsyncThunk(
	"profiles/fetchDataStatus",
	async () => {
		const res = await getFetchProfileData();
		return res.data;
	}
);
export const updateProfileData = createAsyncThunk(
	"profiles/updateDataStatus",
	async (data: IProfile) => {
		const res = await postUpdateProfileData(data);
		return res.data;
	}
);
export const updateProfilePhoto = createAsyncThunk(
	"profiles/updatePhotoStatus",
	async (data: FormData) => {
		const res = await postUpdateProfilePhoto(data);

		return res.data;
	}
);
export const updateProfileType = createAsyncThunk(
	"profiles/updateTypeStatus",
	async (data: IProfileType) => {
		const res = await postUpdateProfileType(data);
		return res.data;
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
			(state: IProfileState, action: any) => {
				state.loading = false;
				state.data = action.payload.me;
			}
		);
		// Update profile data
		builder.addCase(
			updateProfileData.fulfilled,
			(state: IProfileState, action: any) => {
				state.loading = false;
				state.data = action.payload.me;
			}
		);
		// Update profile photo
		builder.addCase(
			updateProfilePhoto.fulfilled,
			(state: IProfileState, action: any) => {
				state.loading = false;
				state.data = action.payload.me;
			}
		);
		// Update profile type
		builder.addCase(
			updateProfileType.fulfilled,
			(state: IProfileState, action: any) => {
				state.loading = false;
				state.data = action.payload.me;
			}
		);
	},
});

export default profileSlice.reducer;
