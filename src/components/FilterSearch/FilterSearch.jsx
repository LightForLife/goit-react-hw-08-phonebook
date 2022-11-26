import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { Box, Input } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const ariaLabel = { 'aria-label': 'description' };

  const handleChange = e => {
    const searchText = e.target.value;
    dispatch(filterContacts(searchText));
  };

  return (
    <Box
      component="div"
      sx={{
        '& > :not(style)': { my: 3, width: '660px' },
      }}
      noValidate
      autoComplete="off"
    >
      <Input
        placeholder="Find contacts by name"
        inputProps={ariaLabel}
        type="search"
        fullWidth
        onChange={handleChange}
      />
    </Box>
  );
};
