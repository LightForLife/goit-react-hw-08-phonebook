// import * as React from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
// import { Header } from './AppBar.styled';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from '../UserMenu/UserMenu';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingBasket } from '@mui/icons-material';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
