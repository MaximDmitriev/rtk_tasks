import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainPage } from './pages/main-page';
import { AuthModal } from './auth-modal';
import Message from './message-component';
import Container from '@material-ui/core/Container';
import { checkToken } from './actions';
import ErrorModal from './error-modal';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkToken());
  }, []);

  const auth = useSelector(state => state.user.token);

  return (
    <Container maxWidth='lg'>
      <MainPage />
      {!auth && <AuthModal />}
      <ErrorModal />
      <Message />
    </Container>
  );
};
