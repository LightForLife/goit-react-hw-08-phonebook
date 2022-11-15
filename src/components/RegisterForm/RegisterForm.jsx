import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';

export const RegisterForm = () => {
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  // const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);

  const initialValues = {
    userName: '',
    email: '',
    password: '',
  };

  const handleSubmit = (value, actions) => {
    console.log(value.userName);
    console.log(value.email);
    console.log(value.password);
    // const body = {
    //   name: value.name,
    //   phone: value.number,
    // };

    // dispatch(addContact(body));

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
