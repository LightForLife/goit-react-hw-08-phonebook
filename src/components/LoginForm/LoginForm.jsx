import * as React from 'react';
import { useDispatch } from 'react-redux';
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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    const body = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    console.log(body);

    dispatch(logIn(body));
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
      <Grid
        sx={{ mt: 20 }}
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            py: 8,
            px: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box
            onSubmit={handleSubmit}
            component="form"
            sx={{ mt: 4, mb: 1 }}
            // noValidate
            // autoComplete="off"
          >
            <TextField
              fullWidth
              id={emailInputId}
              label="Email"
              variant="outlined"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              autoComplete="email"
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
              Log In
            </Button>
          </Box>
          <Grid container sx={{ mt: 2 }}>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};
