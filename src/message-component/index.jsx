import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearMessage } from '../store/message-reducer';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Message() {
  const message = useSelector(state => state.message);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(clearMessage());
  };

  return (
    <Snackbar
      open={message.in}
      autoHideDuration={6000}
      onClose={handleClose}>
      <Alert onClose={handleClose} severity={message.type || 'error'}>
        {message.text}
      </Alert>
    </Snackbar>
  );
}
