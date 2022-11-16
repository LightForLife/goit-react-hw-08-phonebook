import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import Contacts from 'pages/Contacts';
import { Container, MainTitle, SearchTitle } from './App.styled';
import { Filter } from './FilterSearch/FilterSearch';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
