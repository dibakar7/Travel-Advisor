import { alpha, makeStyles } from '@material-ui/core/styles';
import headerBackground from './images1/header.png';

export default makeStyles((theme) => ({
    title1: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        fontSize: "40px",

    },
    title2: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        fontSize: "20px",

    },
    header: {
        backgroundImage :`url(${headerBackground})`,
        height: '40 px',
        width: '100%',

    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.35),
        '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.45) },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
        boxShadow: "1px 3px 2px #cf8b25"
    },
    searchIcon: {
        padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
    },
    toolbar: {
        display: 'flex', justifyContent: 'space-between',
    },
}))
