import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#F5F5F5',
    height: '100vh',
  },
  groupWrapper: {
    padding: '10px',
    maxWidth: '400px',
  },
  itemWrapper: {
    marginBottom: '10px',
  },
  labelText: {
    fontWeight: 700,
  },
  text: {
    marginTop: '2px',
  },
}));
