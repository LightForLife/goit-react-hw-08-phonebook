import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Box, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <Typography
        variant="h5"
        component="span"
        sx={{
          mr: 2,
          textTransform: 'uppercase',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
