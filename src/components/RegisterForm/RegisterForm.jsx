import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import { register } from 'redux/auth/operations';
import * as React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { logIn } from 'redux/auth/operations';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
  Link,
} from '@mui/material';

export const RegisterForm = () => {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    const body = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    console.log(body);

    dispatch(register(body));
    form.reset();
    setValues({ ...values, password: '' });
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            py: 8,
            px: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'green' }}>
            <AssignmentIndIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reqistration
          </Typography>

          <Box
            onSubmit={handleSubmit}
            component="form"
            sx={{ mt: 4 }}
            // noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              id={nameInputId}
              label="Name"
              variant="outlined"
              name="name"
              placeholder="Jane"
              type="text"
              autoComplete="off"
              required
            />
            <TextField
              sx={{ mt: '20px' }}
              fullWidth
              id={emailInputId}
              label="Email"
              variant="outlined"
              name="email"
              placeholder="jane@acme.com"
              className="validate"
              type="email"
              autoComplete="off"
              required
            />
            <FormControl fullWidth sx={{ mt: '20px' }} variant="outlined">
              <InputLabel htmlFor={passwordInputId} required>
                Password
              </InputLabel>
              <OutlinedInput
                id={passwordInputId}
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onChange={handleChange('password')}
                autoComplete="current-password"
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ mt: '40px' }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
    // <div>
    //   <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    //     <Box
    //       component="form"
    //       sx={{
    //         '& .MuiTextField-root': { m: 1, width: '25ch' },
    //       }}
    //       noValidate
    //       autoComplete="off"
    //     >
    //       <label htmlFor={nameInputId}></label>
    //       <TextField
    //         // id="outlined-basic"
    //         label="Username"
    //         variant="outlined"
    //         id={nameInputId}
    //         name="userName"
    //         placeholder="Jane"
    //         type="text"
    //         autoComplete="off"
    //       />

    //       <label htmlFor={emailInputId}></label>
    //       <TextField
    //         id={emailInputId}
    //         label="Email"
    //         variant="outlined"
    //         name="email"
    //         placeholder="jane@acme.com"
    //         type="email"
    //         autoComplete="on"
    //       />

    //       <label htmlFor={passwordInputId}></label>
    //       <TextField
    //         id={passwordInputId}
    //         label="Password"
    //         variant="outlined"
    //         name="password"
    //         // placeholder="Doe"
    //         type="password"
    //         autoComplete="current-password"
    //       />
    //       <button type="submit">Register</button>
    //     </Box>
    //   </Formik>
    // </div>
  );
};
