import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaUserTimes } from 'react-icons/fa';
import { deleteContact } from 'redux/contacts/operations';
import {
  ItemContact,
  NameContact,
  DeleteContactBtn,
  TelContact,
} from './ItemContacts.styled';

export const ItemContacts = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ItemContact id={contact.id}>
      <NameContact>
        {contact.name}
        <DeleteContactBtn onClick={handleDelete}>
          <FaUserTimes size={18} />
        </DeleteContactBtn>
      </NameContact>
      <TelContact>{contact.number}</TelContact>
    </ItemContact>
  );
};

ItemContacts.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
