import React, { useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { GoogleMap, MarkerF } from '@react-google-maps/api'
import styles from './map.module.css'

export function Map({latitude,longitude,focus,newCenter}){
    parseFloat(latitude);
    parseFloat(longitude);
    const center = useMemo(() => ({lat:latitude,lng:longitude}),[latitude,longitude])
    
    return (
        <div className={styles.widthClass}>
         <div style={{ }}>
            <GoogleMap zoom={focus} center={center} mapContainerClassName={focus==15 ? styles.smallWidth : styles.mapContainer}>
                <MarkerF position={center}></MarkerF>
            </GoogleMap>
            </div>
        </div>
    )
  }