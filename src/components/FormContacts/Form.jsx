import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts/operations';
import { FormError, schema } from 'components/Validation/Validation';
import { Grid, Box, Fab } from '@mui/material';
import { useState } from 'react';
import {
  FormBox,
  AddContactBtn,
  FormInput,
  FormContainer,
  FormLabel,
} from './Form.styled';
import AddIcon from '@mui/icons-material/Add';
import { Container } from 'components/App.styled';
import { TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { Snack } from 'components/Snackbar/Snackbar';

export const ContactForm = () => {
  const [isSnackOpen, setSnackOpen] = useState(false);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (value, actions) => {
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === value.name.toLowerCase()
    );

    if (findName) {
      <Alert severity="error">This is an error alert — check it out!</Alert>;
      // alert(`${value.name} is already in contacts`);
      return;
    }

    const body = {
      name: value.name,
      number: value.number,
    };

    dispatch(addContact(body));

    actions.resetForm();
    setSnackOpen(true);
    console.log('add');
  };

  // const formik = useFormik({
  //   initialValues: {
  //     email: 'foobar@example.com',
  //     password: 'foobar',
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form autoComplete="off">
            {/* <FormContainer> */}
            {/* <TextField
            label="Name"
            name="name"
            fullWidth
            variant="outlined"
            margin="dense"
            color="primary"
            // value={name}

            // onBlur={props.handleBlur}
            // helperText={<ErrorMessage name="name" />}
            // error={props.errors.name && props.touched.name}
            required
          /> */}
            {/* Second Way */}
            <Field
              as={TextField}
              label="Name"
              type="text"
              id={nameInputId}
              name="name"
              fullWidth
              variant="outlined"
              margin="dense"
              helperText={<FormError name="name" />}
            />
            <Field
              as={TextField}
              label="Number"
              type="tel"
              name="number"
              id={numberInputId}
              fullWidth
              variant="outlined"
              margin="dense"
              helperText={<FormError name="number" />}
            />
            {/* <FormLabel htmlFor={nameInputId}>
            Name
            <FormInput type="text" name="name" id={nameInputId} />
            <FormError name="name" />
          </FormLabel>

          <FormLabel htmlFor={numberInputId}>
            Number
            <FormInput type="tel" name="number" id={numberInputId} />
            <FormError name="number" />
          </FormLabel> */}
            {/* </FormContainer> */}
            <Fab type="submit" color="primary" aria-label="add">
              <AddIcon />
            </Fab>
            {/* <AddContactBtn type="submit">Add contact</AddContactBtn> */}
          </Form>
        )}
      </Formik>
      <Snack
        isOpen={isSnackOpen}
        handleClose={() => setSnackOpen(false)}
      ></Snack>
    </>
  );
};
