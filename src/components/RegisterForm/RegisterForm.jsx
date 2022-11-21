import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import { register } from 'redux/auth/operations';
import { Box, TextField } from '@mui/material';

export const RegisterForm = () => {
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);

  const initialValues = {
    userName: '',
    email: '',
    password: '',
  };

  const handleSubmit = (value, actions) => {
    const body = {
      name: value.userName,
      email: value.email,
      password: value.password,
    };

    dispatch(register(body));

    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <label htmlFor={nameInputId}></label>
          <TextField
            // id="outlined-basic"
            label="Username"
            variant="outlined"
            id={nameInputId}
            name="userName"
            placeholder="Jane"
            type="text"
            autoComplete="off"
          />

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

          <label htmlFor={passwordInputId}></label>
          <TextField
            id={passwordInputId}
            label="Password"
            variant="outlined"
            name="password"
            // placeholder="Doe"
            type="password"
            autoComplete="current-password"
          />
          <button type="submit">Register</button>
        </Box>
      </Formik>
    </div>
  );
};
