import React, { useState, useEffect } from 'react';
import { useLoadScript, } from '@react-google-maps/api';
import { Map } from './Map.jsx'

export function MapLoader({latitude,longitude,focus}){

const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyAzOtJRseSi5uOc2YVLEo7DMe8cLxuSrvI"})

const [pLatitude, setPLatitude] = useState(parseFloat(latitude));
const [pLongitude, setPLongitude] = useState(parseFloat(longitude));

useEffect(() => {
    setPLatitude(parseFloat(latitude));
    setPLongitude(parseFloat(longitude));
  }, [latitude, longitude]);

    if (!isLoaded) return <div>Loading...</div>;

    return <Map latitude={pLatitude} longitude={pLongitude} focus={focus} />

}