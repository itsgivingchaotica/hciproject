import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Map } from './Map.jsx'

export function MapLoader({latitude,longitude,focus}){

const { isLoaded } = useLoadScript({ googleMapsApiKey: import.meta.env.VITE_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY})
console.log(latitude);
console.log(parseFloat(latitude));

const [pLatitude, setPLatitude] = useState(parseFloat(latitude));
const [pLongitude, setPLongitude] = useState(parseFloat(longitude));

useEffect(() => {
    setPLatitude(parseFloat(latitude));
    console.log("effecteed lat " +  latitude);
    setPLongitude(parseFloat(longitude));
  }, [latitude, longitude]);

  console.log(pLatitude + " pppppppp" + pLongitude);

    if (!isLoaded) return <div>Loading...</div>;

    return <Map latitude={pLatitude} longitude={pLongitude} focus={focus}/>

}