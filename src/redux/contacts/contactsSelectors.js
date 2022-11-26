export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectIsLoadingAddBtn = state => state.contacts.isLoadingAddBtn;

export const selectIsLoadingDeleteBtn = state =>
  state.contacts.isLoadingDeleteBtn;
