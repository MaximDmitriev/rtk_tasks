import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    paddingTop: '100px',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  paper: {
    border: '1px solid #000',
    background: '#fff',
    padding: '10px 0 10px 10px',
  },
  fieldsWrapper: {
    paddingBottom: '35px',
  },
  input: {
    marginRight: '10px',
    width: '300px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    alignSelf: 'flex-end',
    marginRight: '10px',
  },
}));
