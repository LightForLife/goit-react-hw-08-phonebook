import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';

import { ContactForm } from './FormContacts/Form';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './FilterSearch/FilterSearch';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Container, MainTitle, SearchTitle } from './App.styled';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';

import { Layout } from './Layout';
// import { HomePage } from '../pages/Home';
// import { RegisterPage } from '../pages/Register';
// import { LoginPage } from '../pages/Login';
// import { ContactsPage } from '../pages/Contacts';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <GlobalStyle /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
      {/* <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <SearchTitle>Contacts</SearchTitle>
        <Filter />

        {isLoading && !error && <Loader />}
        {error && <Error />}
        {!isLoading && <ListContacts />}
      </Container> */}
    </>
  );
};
