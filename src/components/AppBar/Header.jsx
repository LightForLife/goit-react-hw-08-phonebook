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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingBasket } from '@mui/icons-material';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Navigation />
          {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}

          {/* <Button color="inherit">Login</Button> */}
          {/* <Navigation /> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
