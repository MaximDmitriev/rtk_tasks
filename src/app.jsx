import React from 'react';
import { useSelector } from 'react-redux';
import { MainPage } from './pages/main-page';
import { AuthModal } from './auth-modal';
import Message from './message-component';
import Container from '@material-ui/core/Container';

export const App = () => {
  const auth = useSelector(state => state.user.token);

  return (
    <Container maxWidth='lg'>
      <MainPage />
      {!auth && <AuthModal />}
      <Message />
    </Container>
  );
};
