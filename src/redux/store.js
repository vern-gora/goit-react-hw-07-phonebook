import { configureStore } from '@reduxjs/toolkit';

import { addContactSlice, filterSlice } from './slices';

export const store = configureStore({
  reducer: {
    contacts: addContactSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export const { filter } = filterSlice.actions;
