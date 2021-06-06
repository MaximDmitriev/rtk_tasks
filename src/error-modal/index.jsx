import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Fade } from '@material-ui/core';
import ReportIcon from '@material-ui/icons/Report';
import { clearErrors } from '../store/error-reducer';
import { setLoading } from '../store/user-reducer';

import { useStyles } from './style';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

export default function ErrorModal() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector(state => state.error.hasErrors);

  const handleSubmit = () => {
    dispatch(clearErrors());
    dispatch(setLoading('idle'));
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" className={classes.titleWrap}>
          <ReportIcon fontSize="large" className={classes.titleIcon}/>
          Ошибка
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Произошла ошибка. Попробуйте действие позже.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
