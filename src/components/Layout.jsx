import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AppBar } from './AppBar/AppBar';
import { Container } from './App.styled';
import { GlobalStyle } from 'styles/GlobalStyles';

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
