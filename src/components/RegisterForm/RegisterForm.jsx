import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import { register } from 'redux/auth/operations';

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

    console.log(body);

    dispatch(register(body));

    actions.resetForm();
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor={nameInputId}>Username</label>
          <Field
            id={nameInputId}
            name="userName"
            placeholder="Jane"
            type="text"
            autoComplete="off"
          />

          <label htmlFor={emailInputId}>Password</label>
          <Field
            id={emailInputId}
            name="password"
            placeholder="Doe"
            type="password"
            autoComplete="off"
          />

          <label htmlFor={passwordInputId}>Email</label>
          <Field
            id={passwordInputId}
            name="email"
            placeholder="jane@acme.com"
            type="email"
            autoComplete="off"
          />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};