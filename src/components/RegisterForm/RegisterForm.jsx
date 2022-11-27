import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  // useState for show password
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  // Formik
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (value, actions) => {
    const body = {
      name: value.name,
      email: value.email,
      password: value.password,
    };

    dispatch(register(body));

    // actions.resetForm();
    // setValues({ ...values, password: '' });
  };

  // Show password
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
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{ mt: 20 }}
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
          <Avatar sx={{ m: 1, bgcolor: 'green' }}>
            <AssignmentIndIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
            Reqistration
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={yup.object().shape({
              name: yup
                .string()
                .required('Please enter name')
                .min(2, 'Name too short'),
              email: yup
                .string()
                .required('Please enter email')
                .email('Invalid email'),
              password: yup
                .string()
                .required('Please enter password')
                .min(7, 'Password should be minimum 7 characters long'),
            })}
            onSubmit={handleSubmit}
          >
            {({ errors, isValid, touched, dirty }) => (
              <Form autoComplete="off">
                <Field
                  as={TextField}
                  fullWidth
                  id={nameInputId}
                  label="Name"
                  variant="outlined"
                  name="name"
                  placeholder="Jane"
                  type="text"
                  autoComplete="off"
                  required
                  error={Boolean(errors.name) && Boolean(touched.name)}
                  helperText={Boolean(touched.name) && errors.name}
                />
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
                  required
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
                    aria-describedby="component-error-text"
                    required
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
                  disabled={!dirty || !isValid}
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </>
  );
};
