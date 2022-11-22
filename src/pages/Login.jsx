import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Grid } from '@mui/material';

export default function Login() {
  return (
    <Grid container component="main" sx={{ justifyContent: 'space-around' }}>
      <HelmetProvider>
        <Helmet>
          <title>Login</title>
        </Helmet>
      </HelmetProvider>
      <LoginForm />
    </Grid>
  );
}
