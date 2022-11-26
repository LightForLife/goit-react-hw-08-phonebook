import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import { Box, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LoadingButton from '@mui/lab/LoadingButton';
import { toast } from 'react-toastify';
import { addContact } from 'redux/contacts/contactsOperations';
import { FormError, schema } from 'components/Validation/Validation';
import { selectIsLoadingAddBtn } from 'redux/contacts/contactsSelectors';

export const ContactForm = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoadingAddBtn = useSelector(selectIsLoadingAddBtn);

  const initialValues = {
    name: '',
    number: '',
  };

  // react-toastify
  const notify = () =>
    toast.success('Contact add!', {
      position: 'bottom-left',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

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
    notify();

    actions.resetForm();
  };

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
                loading={isLoadingAddBtn}
                loadingPosition="end"
                variant="contained"
              >
                Add contact
              </LoadingButton>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};
