import * as React from 'react';
import { Snackbar, MuiAlert } from '@mui/material/Snackbar';

export const SnackAddContact = ({ isOpen, handleClose }) => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Contact add!
      </Alert>
    </Snackbar>
  );
};

export const SnackDeleteContact = ({ isOpen, handleClose }) => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Snackbar open={isOpen} autoHideDuration={6000}>
      <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
        Contact deleted!
      </Alert>
    </Snackbar>
  );
};
