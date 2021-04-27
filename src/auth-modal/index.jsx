import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { userLogin } from '../service/fetchData';

import { useStyles } from './style';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error, active, submitting },
  ...custom
}) => (
  <TextField
    label={label}
    error={touched && !active && invalid}
    helperText={touched && !active && error}
    disabled={submitting}
    {...input}
    {...custom}
  />
);

const validate = values => {
  const errors = {};
  if (!values.userName || values.userName.length < 3) {
    errors.userName = 'Должен содержать не менее 3-х символов';
  }
  if (values.userName && values.userName.includes(' ')) {
    errors.userName = 'Не должен содержать пробелов';
  }
  if (!values.password) {
    errors.password = 'Обязательное поле';
  }
  return errors;
};

const AuthModalComponent = (props) => {
  const { handleSubmit, submitting, pristine } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onHandleSubmit = values => {
    return userLogin(values)
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
          <form className={classes.form} onSubmit={handleSubmit(onHandleSubmit)}>
            <div className={classes.fieldsWrapper}>
              <Field
                name="userName"
                id="userName"
                label="Логин"
                className={classes.input}
                variant="outlined"
                component={renderTextField}
              />
              <Field
                name="password"
                id="password"
                label="Пароль"
                className={classes.input}
                variant="outlined"
                type="password"
                component={renderTextField}
              />
            </div>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
              disabled={pristine || submitting}
            >
              Войти
            </Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};

export const AuthModal = reduxForm({
  form: 'auth',
  validate,
})(AuthModalComponent);
