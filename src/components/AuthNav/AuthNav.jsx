import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box>
      <Typography
        component="span"
        sx={{
          mr: 3,
          textTransform: 'uppercase',
        }}
      >
        <NavLink to="/register">Register</NavLink>
      </Typography>
      <Typography
        component="span"
        sx={{
          textTransform: 'uppercase',
        }}
      >
        <NavLink to="/login">Log In</NavLink>
      </Typography>
    </Box>
  );
};
