import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user-reducer';
import messageReducer from './message-reducer';

export default configureStore({
  reducer: {
    form: formReducer,
    user: userReducer,
    message: messageReducer,
  },
});
