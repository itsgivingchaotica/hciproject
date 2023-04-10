import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Map } from './Map.jsx'

export function MapLoader({latitude,longitude}){
const { isLoaded } = useLoadScript({ googleMapsApiKey: "***REMOVED***"})

    if (!isLoaded) return <div>Loading...</div>;

    return <Map latitude={latitude} longitude={longitude} />

}