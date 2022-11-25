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
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField
        id="standard-basic"
        type="search"
        label="Enter name"
        variant="standard"
        onChange={handleChange}
      /> */}
      <Input
        placeholder="Enter name"
        inputProps={ariaLabel}
        type="search"
        onChange={handleChange}
      />
    </Box>
    // <FilterBox>
    //   <LabelFilter htmlFor="">Find contacts by name</LabelFilter>
    //   <InputFilter type="text" onChange={handleChange} />
    // </FilterBox>
  );
};
