import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {
    paddingTop: '15px',
    backgroundColor: '#F5F5F5',
    height: '100vh',
  },
  toolbar: {
    backgroundColor: '#1976d2',
    padding: '0 25px',
    color: '#fff',
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
