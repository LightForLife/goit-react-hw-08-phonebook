import { useSelector } from 'react-redux';
import { Box, List } from '@mui/material';
import { ItemContacts } from 'components/ItemContacts/ItemContacts';
import { selectVisibleContacts } from 'redux/filter/selectors';

export const ListContacts = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <Box sx={{ textAlign: 'center', px: 10 }}>
      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
        }}
      >
        {contacts.map(contact => (
          <ItemContacts key={contact.id} contact={contact} />
        ))}
      </List>
    </Box>
  );
};
