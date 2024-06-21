import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
	'auth/register',
	async (registerData, thunkAPI) => {
		try {
			const response = await axios.post('/users/signup', registerData);

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const login = createAsyncThunk(
	'auth/login',
	async (loginData, thunkAPI) => {
		try {
			const response = await axios.post('/users/login', loginData);

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const logout = createAsyncThunk(
	'auth/logout',
	async (token, thunkAPI) => {
		try {
			const response = await axios.post('/users/logout', token);

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const refreshUser = createAsyncThunk(
	'auth/refresh',
	async (token, thunkAPI) => {
		try {
			const response = await axios.post('/users/current', token);

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
