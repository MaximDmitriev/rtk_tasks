import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { useStyles } from './style';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Message() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      // autoHideDuration={6000}
      onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        Ошибка авторизации. Неправильный логин
      </Alert>
    </Snackbar>
  );
}
