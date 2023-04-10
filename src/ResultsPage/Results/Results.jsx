import React, { useMemo } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "./results.module.css";
import { Result } from "./Result/Result.jsx";
import { MapLoader } from "../../Map/MapLoader.jsx";

export function Results(){
//use hook 

const location = {
    lat:40.6602,
    lng:-73.96895
}

    return (
        <div >
            <div>
                <div className={styles.banner}>
                    <div className={styles.summary}>
                        <h2><strong>parks</strong> near Prospect Park</h2>
                        <p>Showing 10 results</p>
                    </div>
                </div>
                <div className={styles.mapped}>
                <div>
                <Result/>
                <Result/>
                </div>
                <div><MapLoader latitude={location.lat} longitude={location.lng}/></div>
                </div>
            </div>
       </div>
    )
}