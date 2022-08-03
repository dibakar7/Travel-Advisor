import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  mapContainer: {
    height: '85vh', width: '139vh',
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },paddingTop:'50px',
  },
  pointer: {
    cursor: 'pointer',
  },
  smallCard: {
    padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '120px',
    cursor: 'pointer',
  }
}));