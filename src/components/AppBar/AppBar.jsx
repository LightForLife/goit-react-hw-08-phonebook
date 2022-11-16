import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Navigation />
      <AuthNav />
    </Header>
  );
};
