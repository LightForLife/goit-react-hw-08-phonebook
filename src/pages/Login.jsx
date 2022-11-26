import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Grid } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';

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
