import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Typography, Divider } from '@mui/material';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { ContactForm } from 'components/FormContacts/Form';
import { ListContacts } from 'components/ListContacts/ListContacts';
import { Filter } from 'components/FilterSearch/FilterSearch';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';

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
        <Box sx={{ pt: 4 }}>
          <Typography variant="h2" component="h1">
            Phone Book
          </Typography>
          <Divider />
          <ContactForm />
          <Typography variant="h4" component="h3">
            My Contacts
          </Typography>
          <Filter />
          {isLoading && !error && <Loader />}
          {error && <Error />}
          {!isLoading && <ListContacts />}
        </Box>
      </Container>
    </Box>
  );
}
