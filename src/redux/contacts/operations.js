import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://666b57207013419182d313eb.mockapi.io';
axios.defaults.baseURL = 'https://connections-api.goit.global';

// const setAuthHeader = (token) => {
// 	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const fetchContacts = createAsyncThunk(
	'contacts/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get(`/contacts`);
			// setAuthHeader(response.data.token);

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const addContact = createAsyncThunk(
	'contacts/addContact',
	async (contact, thunkAPI) => {
		try {
			const response = await axios.post(`/contacts`, contact);
			// setAuthHeader(response.data.token);

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (contactId, thunkAPI) => {
		try {
			const response = await axios.delete(`/contacts/${contactId}`);
			// setAuthHeader(response.data.token);

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const updateContact = createAsyncThunk(
	'contacts/update',
	async (newContactData, thunkAPI) => {
		const updatedContact = {
			name: newContactData.name,
			number: newContactData.number,
		};
		console.log('updatedContact: ', updatedContact);

		try {
			const response = await axios.patch(
				`/contacts/${newContactData.id}`,
				updatedContact
			);
			// setAuthHeader(response.data.token);

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
