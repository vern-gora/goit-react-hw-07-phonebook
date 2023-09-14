import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

export const addContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.unshift(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    //   extraReducers: {
    //     [fetchContacts.pending]: handlePending,
    //     [fetchContacts.fulfilled]: (state, action) => {
    //       state.items = action.payload;
    //       state.isLoading = false;
    //     },
    //     [fetchContacts.rejected]: handleRejected,
    //     [deleteContact.pending]: handlePending,
    //     [deleteContact.fulfilled]: (state, action) => {
    //       state.isLoading = false;
    //       state.items = state.items.filter(
    //         contact => contact.id !== action.payload.id
    //       );
    //     },
    //     [deleteContact.rejected]: handleRejected,
    //     [addContact.pending]: handlePending,
    //     [addContact.fulfilled]: (state, action) => {
    //       state.items.unshift(action.payload);
    //       state.isLoading = false;
    //     },
    //     [addContact.rejected]: handleRejected,
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter: (state, action) => {
      return (state = action.payload);
    },
  },
});
