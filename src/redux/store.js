import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authReduser } from './auth/slice';

export const store = configureStore({
  reducer: {
    auth: authReduser,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
