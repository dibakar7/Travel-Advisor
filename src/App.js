import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./api";


import useStyles from './appStyles';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import Map from './Components/Map/Map';
//import PlaceDetails from './Components/PlaceDetails/PlaceDetails';

const App = () => {
  const classes = useStyles();
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

//down side code is for tracking geolocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

//down side code is for filter the rating
  useEffect(()=>{
    const filtered = places.filter((place)=> Number(place.rating) > rating);
    setFilteredPlaces(filtered);
	  },[rating]);
	

//down side code is for showing the places inside a map within boundary and also filter places
  useEffect(() => {
    if(bounds) {
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne).then((data)=>{
      setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
      setFilteredPlaces([]);
      setRating('');
      setIsLoading(false);
    });
    }
    
  }, [bounds, type]);

 // console.log(places);
  //console.log(filtered);

  const onLoad = (autoC) => setAutocomplete(autoC);

  //please visit google map documentation to find more information of geometry.location.lat/lng()
  const onPlaceChanged = () => {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();

      setCoords({ lat, lng });
  };

  return (
    <>
    <div className={classes.bg} style={{ width: "100%", height: "100%"}}>
      <CssBaseline />
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad}/>
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Map
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </div>
    </>
  );
};

export default App;
