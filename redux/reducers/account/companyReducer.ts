import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../lib/axios";

export interface ICompanyState extends IState {
	data: ICompany;
}
const initialState: ICompanyState = {
	data: null,
	loading: true,
};

export const updateCompanyLogo = createAsyncThunk(
	"companies/updateLogoStatus",
	async (data: FormData) => {
		const res = await axios.post(
			`/api/account/companies/update-logo`,
			data
		);
		return res.data.data;
	}
);
export const companySlice = createSlice({
	name: "companies",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Update company logo
		builder.addCase(
			updateCompanyLogo.fulfilled,
			(state: ICompanyState, action) => {
				state.loading = false;
				state.data = action.payload;
			}
		);
	},
});

export default companySlice.reducer;
