import React from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './style';

export const MainPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Toolbar disableGutters>
        <Typography variant='h6'>Главная страница</Typography>
      </Toolbar>
      <Card className={classes.groupWrapper}>
        <div className={classes.itemWrapper}>
          <Typography className={classes.labelText}>Имя:</Typography>
          <Typography className={classes.text}>Админ</Typography>
        </div>
        <div className={classes.itemWrapper}>
          <Typography className={classes.labelText}>Фамилия:</Typography>
          <Typography className={classes.text}>Тестов</Typography>
        </div>
      </Card>
    </Container>
  );
};
