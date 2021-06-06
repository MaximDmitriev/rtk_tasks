import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  titleIcon: {
    color: 'red',
    marginRight: '5px',
  },
  titleWrap: {
    '& h2': {
      display: 'flex',
      alignItems: 'center',
    },
  },
}));
