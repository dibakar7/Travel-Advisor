import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import paperplane from './images1/paper-plane.png';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style';
const Header = ({ onPlaceChanged, onLoad }) => {
    const classes = useStyles();
    const[popup, setPopup] = useState(false);

    const handleClickOpen=()=>{
        setPopup(!popup);
    }

    const closePopup=()=>{
        setPopup(false);
    }
    
    
    return (
        /* providing the style prop and add the backgroundColor property to say, pink and it turned the color to pink => style={{ backgroundColor: "pink", color: "black"}}*/
        <AppBar position="sticky" className={classes.header} style={{width: "100%", height: "65px", boxShadow: "1px 3px 2px #cf8b25"}}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title1} style={{color: "#522914", alignItems: "center"}}>
                    Travel Advisor
                </Typography>
                <img src={paperplane} alt="paper-plane" style={{ width: "42px", height: "35px", position: "absolute", left: "280px", top: "2px"}} />
                <div className="appPop">
                  <button onClick={handleClickOpen}>Open Popup</button>
                  <div>
                    {popup?
                        <div className="popup">
                            <div className="pop-header">
                                <h1>Popup message</h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <p>
                                Due to Google API billing issue only the search bar will not work for some days, really sorry for this
                                inconvenience. I am working on this. You can drag google map to explore attractions, hotels & restaurants 
                                around your favourite tourist spot.
                            </p>
                            <h3>Thank You!</h3>
                        </div>
                        :""}
                  </div>
                </div>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title2} style={{color: "#cf8b25", alignItems: "center"}}>
                        Explore new places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon} style={{color: "#cf8b25"}}>
                                <SearchIcon />
                            </div>
                            <InputBase id="searchInput" placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} style={{color: "#cf8b25"}}/>
                        </div>
                    </Autocomplete> 
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default Header;
