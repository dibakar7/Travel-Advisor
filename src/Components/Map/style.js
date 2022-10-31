import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  mapContainer: {
    height: "83%", width: "207%",paddingTop: "0.4vh", position: "sticky", left: "70vh", top: "80px"
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },paddingTop:'50px', borderRadius: "4px"
  },
  pointer: {
    cursor: "pointer",
  },
  smallCard: {
    padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '120px',
    cursor: 'pointer',
  }
  
}));
