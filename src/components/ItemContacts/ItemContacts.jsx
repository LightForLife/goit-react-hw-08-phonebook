import { useDispatch } from 'react-redux';
import React from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { LoadingButton } from '@mui/lab';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
import {
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectIsLoadingDeleteBtn } from 'redux/contacts/contactsSelectors';

export const ItemContacts = ({ contact }) => {
  const dispatch = useDispatch();

  const isLoadingDelete = useSelector(selectIsLoadingDeleteBtn);

  // notify for react-toastify
  const notify = () =>
    toast.info('Contact deleted!', {
      position: 'bottom-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));

    notify();
  };

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
          loading={isLoadingDelete}
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
