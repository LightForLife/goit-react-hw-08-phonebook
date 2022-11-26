import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './AppBar/AppBar';
import { GlobalStyle } from 'styles/GlobalStyles';

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </>
  );
};
