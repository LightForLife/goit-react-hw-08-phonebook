import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaUserTimes } from 'react-icons/fa';
import { deleteContact } from 'redux/contacts/contactsOperations';
import {
  ItemContact,
  NameContact,
  DeleteContactBtn,
  TelContact,
} from './ItemContacts.styled';
import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import { selectIsLoadingDelete } from 'redux/contacts/contactsSelectors';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

export const ItemContacts = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  const isLoadingAdd = useSelector(selectIsLoadingDelete);

  return (
    <>
      <ListItem id={contact.id}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={contact.name} secondary={contact.number} />
        <LoadingButton
          size="small"
          onClick={handleDelete}
          loading={isLoadingAdd}
          loadingPosition="start"
          startIcon={<DeleteIcon />}
          variant="contained"
        >
          Delete
        </LoadingButton>
      </ListItem>
      <Divider component="li" />
    </>
  );
};

ItemContacts.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
