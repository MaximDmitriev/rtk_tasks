import React from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { userLogout } from '../actions';

import { useStyles } from './style';

export const UserMenu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };
  const logOutHandler = () => {
    dispatch(userLogout());
  };
  const open = Boolean(anchorEl);
  return (
    <>
      <Avatar alt='user' src='./img/ch_p.jpg' className={classes.avatar} onClick={openMenu}/>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Card>
          <CardMedia
            component="img"
            alt="user"
            height="140"
            image="./img/ch_p.jpg"
            className={classes.cardImg}
          />
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={logOutHandler}
          >
            Выйти
          </Button>
        </Card>
      </Popover>
    </>
  );
};
