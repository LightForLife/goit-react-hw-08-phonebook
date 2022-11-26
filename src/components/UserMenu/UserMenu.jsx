import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      <MenuItem>{user.email}</MenuItem>
      <MenuItem type="button" onClick={handleLogOut}>
        <ListItemIcon sx={{ minWidth: 24 }}>
          <Logout fontSize="medium" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </>
  );
};
