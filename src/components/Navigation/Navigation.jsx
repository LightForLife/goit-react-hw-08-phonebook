import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Typography } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Typography variant="h6" component="nav" sx={{ flexGrow: 1 }}>
      <NavLink style={{ textDecoration: 'none' }} to="/">
        Home
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </Typography>
  );
};
