import React from 'react';
import { MainPage } from './pages/main-page';
import { AuthModal } from './auth-modal';
import Message from './message-component';

export const App = () => {
  return (
    <>
      <MainPage />
      <AuthModal />
      <Message />
    </>
  );
};
