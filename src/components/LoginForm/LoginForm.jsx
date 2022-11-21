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
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (value, actions) => {
    const body = {
      email: value.email,
      password: value.password,
    };

    dispatch(logIn(body));

    actions.resetForm();
  };

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

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
    <div>
      <h1>Sign Up</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <label htmlFor={emailInputId}></label>
          <TextField
            id={emailInputId}
            label="Email"
            variant="outlined"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            autoComplete="on"
          />
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor={passwordInputId}>Password</InputLabel>
            <OutlinedInput
              id={passwordInputId}
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              autoComplete="current-password"
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

          {/* <label htmlFor={passwordInputId}></label>
          <TextField
            id={passwordInputId}
            label="Password"
            variant="outlined"
            name="password"
            // placeholder="Doe"
            type="password"
            autoComplete="current-password"
          /> */}
          <button type="submit">Log In</button>
        </Box>
      </Formik>
    </div>
  );
};
