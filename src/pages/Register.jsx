import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import { Grid } from '@mui/material';

export default function Register() {
  return (
    <Grid container component="main" sx={{ justifyContent: 'space-around' }}>
      <HelmetProvider>
        <Helmet>
          <title>Registration</title>
        </Helmet>
      </HelmetProvider>
      <RegisterForm />
    </Grid>
  );
}
