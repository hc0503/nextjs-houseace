import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export interface IRoleState extends IState {
	data: IRole[];
}
const initialState: IRoleState = {
	data: [],
	loading: true,
};

export const fetchRoleList = createAsyncThunk(
	"roles/fetchAllStatus",
	async () => {
		const res = await axios.get(`${process.env.BASE_URL}/api/roles`);

		return res.data.data;
	}
);

export const roleSlice = createSlice({
	name: "roles",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Get roles
		builder.addCase(fetchRoleList.pending, (state: IRoleState) => {
			state.loading = true;
		});
		builder.addCase(
			fetchRoleList.fulfilled,
			(state: IRoleState, action) => {
				state.data = action.payload;
				state.loading = false;
			}
		);
		builder.addCase(fetchRoleList.rejected, (state: IRoleState) => {
			state.loading = false;
			state.data = [];
		});
	},
});

export default roleSlice.reducer;