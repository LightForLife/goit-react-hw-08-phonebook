import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  isLoadingAddBtn: false,
  isLoadingDeleteBtn: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoadingAddBtn = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoadingAddBtn = false;
        state.error = null;
        state.items.unshift(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoadingAddBtn = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoadingDeleteBtn = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoadingDeleteBtn = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoadingDeleteBtn = false;
        state.error = action.payload;
      }),
  //========================= Var 2 ========================//
  // const actions = [fetchContacts, addContact, deleteContact];

  // const getActionsWithType = type => actions.map(action => action[type]);

  // const fetchContactsSuccessReduceer = (state, action) => {
  //   state.items = action.payload;
  // };

  // const addContactsSuccessReduceer = (state, action) => {
  //   state.isLoadingAdd = true;
  //   state.items.unshift(action.payload);
  // };

  // const deleteContactsSuccessReduceer = (state, action) => {
  //   state.isLoadingDelete = true;
  //   const index = state.items.findIndex(
  //     contact => contact.id === action.payload.id
  //   );
  //   state.items.splice(index, 1);
  // };

  // const anyPendingReducer = state => {
  //   state.isLoading = true;
  // };

  // const anyRejectedReducer = (state, action) => {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // };

  // const anyFulfilledReducer = state => {
  //   state.isLoading = false;
  //   state.error = null;
  // };

  // .addCase(fetchContacts.fulfilled, fetchContactsSuccessReduceer)
  // .addCase(addContact.fulfilled, addContactsSuccessReduceer)
  // .addCase(deleteContact.fulfilled, deleteContactsSuccessReduceer)

  // .addMatcher(isAnyOf(...getActionsWithType('pending')), anyPendingReducer)
  // .addMatcher(
  //   isAnyOf(...getActionsWithType('rejected')),
  //   anyRejectedReducer
  // )
  // .addMatcher(
  //   isAnyOf(...getActionsWithType('fulfilled')),
  //   anyFulfilledReducer
  // ),
  //========================= Var 1 ========================//

  // const handlePending = state => {
  //   state.isLoading = true;
  // };
  // const handleRejected = (state, action) => {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // };

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
