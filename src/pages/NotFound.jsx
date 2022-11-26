import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

export const NotFound = () => {
  return (
    <Box component="main">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <img
          src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
          alt="Error 404"
          loading="lazy"
          width={500}
        />
        <Typography component="h1" variant="h2" sx={{ mb: 2, mt: 4 }}>
          Oops, looks like the page is lost ;(
        </Typography>
        <Typography component="p" variant="h4">
          This is not a fault, just an accident that was not intentional.
        </Typography>
      </Box>
    </Box>
  );
};
