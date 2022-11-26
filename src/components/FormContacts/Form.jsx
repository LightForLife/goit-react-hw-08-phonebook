import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts/contactsOperations';
import { FormError, schema } from 'components/Validation/Validation';
import { Grid, Box, Fab } from '@mui/material';
import { useState } from 'react';
import * as yup from 'yup';
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
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Icon from '@mui/material/Icon';
import { green } from '@mui/material/colors';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import { selectIsLoadingAdd } from 'redux/contacts/contactsSelectors';
import Divider from '@mui/material/Divider';

export const ContactForm = () => {
  const [isSnackOpen, setSnackOpen] = useState(false);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoadingAdd = useSelector(selectIsLoadingAdd);

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (value, actions) => {
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === value.name.toLowerCase()
    );

    if (findName) {
      // <Alert severity="error">This is an error alert — check it out!</Alert>;
      alert(`${value.name} is already in contacts`);
      return;
    }

    const body = {
      name: value.name,
      number: value.number,
    };

    dispatch(addContact(body));

    actions.resetForm();
    setSnackOpen(true);
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
            <Box sx={{ px: 20, py: 4 }}>
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
              <LoadingButton
                sx={{ mt: 2 }}
                type="submit"
                endIcon={<AddIcon />}
                loading={isLoadingAdd}
                loadingPosition="end"
                variant="contained"
              >
                Add contact
              </LoadingButton>
            </Box>
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
