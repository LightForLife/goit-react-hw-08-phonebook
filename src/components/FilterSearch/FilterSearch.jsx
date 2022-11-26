import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { LabelFilter, FilterBox, InputFilter } from './FilterSearch.styled';
import { Box, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchOutlined from '@mui/icons-material/Search';
import Input from '@mui/material/Input';

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
