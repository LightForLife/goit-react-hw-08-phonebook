import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import SvgIcon from '@mui/material/SvgIcon';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      <MenuItem>
        {/* <Avatar fontSize="large" />  */}
        {user.email}
      </MenuItem>
      <MenuItem type="button" onClick={handleLogOut}>
        <ListItemIcon sx={{ minWidth: 24 }}>
          <Logout fontSize="medium" />
        </ListItemIcon>
        Logout
      </MenuItem>
      {/* <MenuItem>
        <button type="button" onClick={handleLogOut}>
          Logout
        </button>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem> */}
    </>
  );
};
