import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/contactsSelectors';

export const selectFilter = state => state.filter.filterValue;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    // console.log('Calculating visible tasks. Now memoized!');

    const constNormalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(constNormalizedFilter)
    );
  }
);
