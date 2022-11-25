import { ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ErrorText } from './Validation.styled';

const nameRules = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberRules =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(24, 'Too Long!')
    .matches(nameRules, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    })
    .required('Please enter name'),
  number: yup
    .string()
    .matches(numberRules, {
      message:
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    })
    .required('Please enter number'),
});

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
