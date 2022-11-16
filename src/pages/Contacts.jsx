import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import { ContactForm } from 'components/FormContacts/Form';
import { ListContacts } from 'components/ListContacts/ListContacts';
import { SearchTitle } from 'components/App.styled';
import { Filter } from 'components/FilterSearch/FilterSearch';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <ListContacts />
      <SearchTitle>Contacts</SearchTitle>
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
    </div>
  );
}
