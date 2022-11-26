import { useSelector } from 'react-redux';
import { selectError } from 'redux/contacts/contactsSelectors';
import { ErrorTitle } from './Error.styled';

export const Error = () => {
  const errorValue = useSelector(selectError);
  return <ErrorTitle>{errorValue} :(</ErrorTitle>;
};
