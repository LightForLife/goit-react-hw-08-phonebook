import { useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { Box } from '@mui/material';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <Box>
      <RotatingLines
        strokeColor="#66B2FF"
        strokeWidth="4"
        animationDuration="0.75"
        width="58"
        visible={isLoading}
      />
    </Box>
  );
};
