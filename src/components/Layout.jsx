import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from './AppBar/Header';
import { Container } from './App.styled';
import { GlobalStyle } from 'styles/GlobalStyles';

export const Layout = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Container>
        <Header />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
