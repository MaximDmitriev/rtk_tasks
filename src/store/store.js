import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import userReducer from './user-reducer';
import messageReducer from './message-reducer';
import errorReducer from './error-reducer';
import { rootSaga } from '../sagas';


const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    form: formReducer,
    user: userReducer,
    message: messageReducer,
    error: errorReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
