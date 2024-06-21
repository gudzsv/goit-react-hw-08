import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = (state) => {
	state.loading = true;
};

const handleRejected = (state, action) => {
	state.loading = false;
	state.error = action.payload;
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: {
		items: [],
		loading: false,
		error: null,
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.pending, handlePending)
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.error = null;
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchContacts.rejected, handleRejected)

			.addCase(addContact.pending, handlePending)
			.addCase(addContact.fulfilled, (state, action) => {
				state.error = null;
				state.loading = false;
				state.items.push(action.payload);
			})
			.addCase(addContact.rejected, handleRejected)

			.addCase(deleteContact.pending, handlePending)
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.error = null;
				state.loading = false;
				state.items = state.items.filter(
					(item) => item.id !== action.payload.id
				);
			})
			.addCase(deleteContact.rejected, handleRejected);
	},
});

export const contactsReducer = contactsSlice.reducer;
