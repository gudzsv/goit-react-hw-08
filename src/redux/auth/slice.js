import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';

const initialState = {
	user: {
		name: null,
		email: null,
	},
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state, action) => {})
			.addCase(register.fulfilled, (state, action) => {
				console.log(state);
			})
			.addCase(register.rejected, (state, action) => {})

			.addCase(login.pending, (state, action) => {})
			.addCase(login.fulfilled, (state, action) => {})
			.addCase(login.rejected, (state, action) => {})

			.addCase(logout.pending, (state, action) => {})
			.addCase(logout.fulfilled, (state, action) => {})
			.addCase(logout.rejected, (state, action) => {})

			.addCase(refreshUser.pending, (state, action) => {})
			.addCase(refreshUser.fulfilled, (state, action) => {})
			.addCase(refreshUser.rejected, (state, action) => {});
	},
});

export const authReducer = authSlice.reducer;
