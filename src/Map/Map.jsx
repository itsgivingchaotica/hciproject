import React, { useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { GoogleMap, MarkerF } from '@react-google-maps/api'
import styles from './map.module.css'

export function Map({latitude,longitude}){
    // const center = useMemo(() => )
    // latitude = parseFloat(latitude);
    // longitude = parseFloat(longitude);
    const center = useMemo(() => ({lat:latitude,lng:longitude}),[])
    console.log(center);
    return (
        <div className={styles.width}>
            <GoogleMap zoom={13} center={center} mapContainerClassName={styles.mapContainer}>
                <MarkerF position={center}></MarkerF>
            </GoogleMap>
        </div>
    )
  }