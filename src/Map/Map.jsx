import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { GoogleMap, Marker } from '@react-google-maps/api'
import styles from './map.module.css'

export function Map({latitude,longitude}){
    // const center = useMemo(() => )
    // latitude = parseFloat(latitude);
    // longitude = parseFloat(longitude);
    console.log(latitude);
    console.log(longitude);
    return (
        <div className={styles.width}>
            <GoogleMap zoom={10} center={{lat:latitude,lng:longitude}} mapContainerClassName={styles.mapContainer}>
                <Marker></Marker>
            </GoogleMap>
        </div>
    )
  } 