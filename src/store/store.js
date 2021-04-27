import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user-reducer';
import messageReducer from './message-reducer';

export default configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
  },
});
