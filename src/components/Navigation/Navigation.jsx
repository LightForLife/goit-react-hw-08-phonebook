import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <Typography
        variant="h6"
        component="span"
        sx={{
          mr: 2,
          textTransform: 'uppercase',
        }}
      >
        <NavLink to="/">HOME</NavLink>
      </Typography>
      {isLoggedIn && (
        <Typography
          variant="h6"
          component="span"
          sx={{ textTransform: 'uppercase' }}
        >
          <NavLink to="/contacts">Contacts</NavLink>
        </Typography>
      )}
    </Box>
  );
};
