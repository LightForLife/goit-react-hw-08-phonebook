import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  isLoadingAdd: false,
  isLoadingDelete: false,
};

const actions = [fetchContacts, addContact, deleteContact];

const getActionsWithType = type => actions.map(action => action[type]);

const fetchContactsSuccessReduceer = (state, action) => {
  state.items = action.payload;
};

const addContactsSuccessReduceer = (state, action) => {
  state.isLoadingAdd = true;
  state.items.unshift(action.payload);
};

const deleteContactsSuccessReduceer = (state, action) => {
  state.isLoadingDelete = true;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const anyPendingReducer = state => {
  state.isLoading = true;
  state.isLoadingAdd = true;
  state.isLoadingDelete = true;
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.isLoadingAdd = false;
  state.isLoadingDelete = false;
  state.error = action.payload;
};

const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.isLoadingAdd = false;
  state.isLoadingDelete = false;
  state.error = null;
};

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReduceer)
      .addCase(addContact.fulfilled, addContactsSuccessReduceer)
      .addCase(deleteContact.fulfilled, deleteContactsSuccessReduceer)

      .addMatcher(isAnyOf(...getActionsWithType('pending')), anyPendingReducer)
      .addMatcher(
        isAnyOf(...getActionsWithType('rejected')),
        anyRejectedReducer
      )
      .addMatcher(
        isAnyOf(...getActionsWithType('fulfilled')),
        anyFulfilledReducer
      ),

  // extraReducers: {
  //   [fetchContacts.pending]: handlePending,
  //   [addContact.pending]: handlePending,
  //   [deleteContact.pending]: handlePending,
  //   [fetchContacts.rejected]: handleRejected,
  //   [addContact.rejected]: handleRejected,
  //   [deleteContact.rejected]: handleRejected,
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.unshift(action.payload);
  //   },
  //   [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       contact => contact.id === action.payload.id
  //     );
  //     state.items.splice(index, 1);
  //   },
  // },
});

export const contactsReducer = contactsSlice.reducer;
