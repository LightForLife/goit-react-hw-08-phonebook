import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { ContactForm } from 'components/FormContacts/Form';
import { ListContacts } from 'components/ListContacts/ListContacts';
import { SearchTitle } from 'components/App.styled';
import { Filter } from 'components/FilterSearch/FilterSearch';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { Box, Container } from '@mui/material';
import { red } from '@mui/material/colors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box component="main">
      <Container maxWidth="md" sx={{ textAlign: 'center', mt: 10 }}>
        <ContactForm />
        <SearchTitle>Contacts</SearchTitle>
        <Filter />
        {isLoading && !error && <Loader />}
        {error && <Error />}
        {!isLoading && <ListContacts />}
      </Container>
    </Box>
  );
}
