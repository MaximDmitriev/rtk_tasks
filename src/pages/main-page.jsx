import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { UserMenu } from '../user-menu-component';
import { userLastNameSelector, userNameSelector, userTokenSelector } from '../store/user-reducer';

import { useStyles } from './style';

const MainPage = ({ name, lastName, token }) => {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar} disableGutters>
        <Typography variant='h6'>Главная страница</Typography>
        {token && <UserMenu />}
      </Toolbar>
      {token &&
      <Container maxWidth='lg' className={classes.container}>
        <Card className={classes.groupWrapper}>
          <div className={classes.itemWrapper}>
            <Typography className={classes.labelText}>Имя:</Typography>
            <Typography className={classes.text}>{name}</Typography>
          </div>
          <div className={classes.itemWrapper}>
            <Typography className={classes.labelText}>Фамилия:</Typography>
            <Typography className={classes.text}>{lastName}</Typography>
          </div>
        </Card>
      </Container>}
    </>
  );
};

const mapStateToProps = state => {
  return {
    name: userNameSelector(state),
    lastName: userLastNameSelector(state),
    token: userTokenSelector(state),
  };
};

export default connect(mapStateToProps)(MainPage);
