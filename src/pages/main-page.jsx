import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { UserMenu } from '../user-menu-component';

import { useStyles } from './style';

export const MainPage = () => {
  const classes = useStyles();
  const user = useSelector(state => state.user);

  return (
    <>
      <Toolbar className={classes.toolbar} disableGutters>
        <Typography variant='h6'>Главная страница</Typography>
        {user.token && <UserMenu />}
      </Toolbar>
      {user.token &&
      <Container maxWidth='lg' className={classes.container}>
        <Card className={classes.groupWrapper}>
          <div className={classes.itemWrapper}>
            <Typography className={classes.labelText}>Имя:</Typography>
            <Typography className={classes.text}>{user.firstName}</Typography>
          </div>
          <div className={classes.itemWrapper}>
            <Typography className={classes.labelText}>Фамилия:</Typography>
            <Typography className={classes.text}>{user.lastName}</Typography>
          </div>
        </Card>
      </Container>}
    </>
  );
};
