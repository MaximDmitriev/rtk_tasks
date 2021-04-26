import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useStyles } from './style';

export const AuthModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      disableBackdropClick
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h3 id="transition-modal-title">Авторизация</h3>
          <form className={classes.form}>
            <div>
              <TextField
                className={classes.input}
                error={true}
                id="login"
                label="Логин"
                variant="outlined"
                helperText="Не должно содержать пробелов"
              />
              <TextField
                className={classes.input}
                error={false}
                id="password"
                type="password"
                label="Пароль"
                variant="outlined"
              />
            </div>
            <Button className={classes.button} variant="contained" color="primary">Войти</Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};
