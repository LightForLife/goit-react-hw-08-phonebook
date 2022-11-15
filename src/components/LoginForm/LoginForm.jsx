import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';

export const LoginForm = () => {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  // const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (value, actions) => {
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
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};
