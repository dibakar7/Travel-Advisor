import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl1: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px', paddingRight: '5px',
  },
  formControl2: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px', paddingLeft: '5px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
}));