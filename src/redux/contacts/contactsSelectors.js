export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectIsLoadingAdd = state => state.contacts.isLoadingAdd;

export const selectIsLoadingDelete = state => state.contacts.isLoadingDelete;
