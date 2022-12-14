import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

export default function Home() {
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
          src="https://img.freepik.com/premium-vector/phone-contact-book-icon-address-list-organizer-flat-vector-notebook-directory-personal-catalogue-telephone-information-symbol-isolated-on-white-background_88813-2083.jpg"
          alt="Error 404"
          loading="lazy"
          width={300}
        />
        <Typography component="h1" variant="h3" sx={{ mt: 8 }}>
          Welcome to Phone Book
        </Typography>
      </Box>
    </Box>
  );
}
