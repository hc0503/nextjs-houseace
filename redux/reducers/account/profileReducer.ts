import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
	getFetchProfileData,
	postUpdateProfileData,
	postUpdateProfilePhoto,
	postUpdateProfileType,
} from "../../../services/profileService";
import {
	postUpdateCompanyData,
	postUpdateCompanyHero,
	postUpdateCompanyLogo,
} from "../../../services/CompanyService";

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
	async (data: IProfileData) => {
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
export const updateCompanyLogo = createAsyncThunk(
	"profiles/updateCompanyLogoStatus",
	async (data: FormData) => {
		const res = await postUpdateCompanyLogo(data);
		return res.data;
	}
);
export const updateCompanyHero = createAsyncThunk(
	"profiles/updateCompanyHeroStatus",
	async (data: FormData) => {
		const res = await postUpdateCompanyHero(data);
		return res.data;
	}
);
export const updateCompanyData = createAsyncThunk(
	"profiles/updateCompanyDataStatus",
	async (data: ICompanyData) => {
		const res = await postUpdateCompanyData(data);
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
		// Update company logo
		builder.addCase(
			updateCompanyLogo.fulfilled,
			(state: IProfileState, action: any) => {
				state.loading = false;
				state.data = action.payload.me;
			}
		);
		// Update company hero
		builder.addCase(
			updateCompanyHero.fulfilled,
			(state: IProfileState, action: any) => {
				state.loading = false;
				state.data = action.payload.me;
			}
		);
		// Update company data
		builder.addCase(
			updateCompanyData.fulfilled,
			(state: IProfileState, action: any) => {
				state.loading = false;
				state.data = action.payload.me;
			}
		);
	},
});

export default profileSlice.reducer;
