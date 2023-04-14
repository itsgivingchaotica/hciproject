import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Map } from './Map.jsx'

export function MapLoader({latitude,longitude}){

const { isLoaded } = useLoadScript({ googleMapsApiKey: import.meta.env.VITE_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY})
console.log(isLoaded);

    if (!isLoaded) return <div>Loading...</div>;

    return <Map latitude={latitude} longitude={longitude} />

}