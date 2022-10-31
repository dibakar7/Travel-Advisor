import React from "react";
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import  LocationOnOutlinedIcon  from "@material-ui/icons/LocationOnOutlined";
import  Rating  from "@material-ui/lab/Rating";

import useStyles from './style';
import mapStyles from './mapStyles';

const Map = ({ setCoords, setBounds, coords, places, setChildClicked }) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');

    
    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact 
               bootstrapURLkeys={{key: process.env.REACT_APP_GOOPLE_MAPS_API_KEY }}
               defaultCenter = {coords}
               center={coords}
               defaultZoom={15}
               margin={[50, 50, 50, 50]}
               options ={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
               onChange={(e)=>{
                setCoords({ lat: e.center.lat, lng: e.center.lng });
                setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
               }}
               onChildClick={(child) => setChildClicked(child)}
            >
                {places.length && places.map((place, i)=>(
                    <div 
                        className={classes.markerContainer} 
                        lat={Number(place.latitude)} 
                        lng={Number(place.longitude)} 
                        key={i}
                        >
                        {
                            !matches ? (
                                <LocationOnOutlinedIcon color="primary" fontSize="large" />
                            ):(
                                <Paper elevation={3} className={classes.smallCard}>
                                    <Typography className={classes.typography} variant = "subtitle2" gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img 
                                        className={classes.pointer} 
                                        src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                        alt={place.name} 
                                    />
                                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly/>
                                </Paper>
                            )
                        }
                    </div>
                ))}

               </GoogleMapReact>

        </div>
    );
}
export default Map;
