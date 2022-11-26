import { Box } from '@mui/material';
import { RotatingLines } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';

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
