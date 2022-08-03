import { data } from "@react-google-maps/api";
import axios from "axios";



export const getPlacesData = async(type, sw, ne) => {
    try{
        //request
        //const URL = 'https://travel-advisor.p.rapidapi.com//list-in-boundary';

        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
                'X-RapidAPI-Key': 'API KEY',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
        });
        return data;
    }
    catch(error){
        console.log(error);
    }
}
