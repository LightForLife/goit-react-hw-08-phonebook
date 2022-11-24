import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/material';

import { Header } from './AppBar/Header';
// import { Container } from './App.styled';
import { GlobalStyle } from 'styles/GlobalStyles';

export const Layout = () => {
  return (
    <>
      <GlobalStyle />

      <Header />
      {/* <Container maxWidth="md" sx={{ textAlign: 'center' }}> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* </Container> */}
    </>
  );
};
