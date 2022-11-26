import * as React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
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
  FormHelperText,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Formik, Field, Form } from 'formik';
import { logIn } from 'redux/auth/authOperations';

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

  // Formik
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

          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .required('Please enter email')
                .email('Invalid email'),
              password: yup.string().required('Please enter password'),
              // .min(7, 'Password should be minimum 7 characters long'),
            })}
          >
            {({ errors, touched }) => (
              <Form autoComplete="off">
                <Field
                  as={TextField}
                  sx={{ mt: '20px' }}
                  fullWidth
                  id={emailInputId}
                  label="Email"
                  variant="outlined"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                  autoComplete="off"
                  error={Boolean(errors.email) && Boolean(touched.email)}
                  helperText={Boolean(touched.email) && errors.email}
                />
                <Field
                  as={FormControl}
                  fullWidth
                  sx={{ mt: '20px' }}
                  error={Boolean(errors.password) && Boolean(touched.password)}
                  helpertext={touched.password && errors.password}
                >
                  <InputLabel htmlFor={passwordInputId}>Password</InputLabel>
                  <OutlinedInput
                    id={passwordInputId}
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
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
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  {errors.password && (
                    <FormHelperText id="component-error-text">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Field>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{ mt: '40px' }}
                >
                  Log In
                </Button>
              </Form>
            )}
          </Formik>
          <Grid container sx={{ mt: 2 }}>
            <Grid item xs>
              <Typography variant="body2">
                <NavLink>Forgot password?</NavLink>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                <NavLink to="/register">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};
