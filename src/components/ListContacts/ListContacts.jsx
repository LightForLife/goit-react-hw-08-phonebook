import { useSelector } from 'react-redux';
import { ItemContacts } from 'components/ItemContacts/ItemContacts';
import { selectVisibleContacts } from 'redux/filter/selectors';
import List from '@mui/material/List';
import { Box } from '@mui/material';

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
