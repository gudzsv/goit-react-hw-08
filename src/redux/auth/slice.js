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
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
			})
			.addCase(register.rejected, (state, action) => {})

			.addCase(login.pending, (state, action) => {})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
			})
			.addCase(login.rejected, (state, action) => {})

			.addCase(logout.pending, (state, action) => {})
			.addCase(logout.fulfilled, (state, action) => {
				state.user = {name:null, email: null}
				state.token = null
				state.isLoggedIn =false
			})
			.addCase(logout.rejected, (state, action) => {})

			.addCase(refreshUser.pending, (state, action) => {
				state.isRefreshing = true
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
				
			})
			.addCase(refreshUser.rejected, (state, action) => {
				state.isRefreshing = false
			});
	},
});

export const authReducer = authSlice.reducer;
