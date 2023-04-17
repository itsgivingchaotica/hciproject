import React, { useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { GoogleMap, MarkerF } from '@react-google-maps/api'
import styles from './map.module.css'

export function Map({latitude,longitude,focus,newCenter}){
    // const center = useMemo(() => )
    parseFloat(latitude);
    parseFloat(longitude);
    
    const center = useMemo(() => ({lat:latitude,lng:longitude}),[latitude,longitude])
    console.log(latitude + " latitude from the MAP" + longitude + " plus longitude");
    
    return (
        <div className={styles.widthClass}>
            <GoogleMap zoom={focus} center={center} mapContainerClassName={focus==15 ? styles.smallWidth : styles.mapContainer}>
                <MarkerF position={center}></MarkerF>
            </GoogleMap>
        </div>
    )
  }