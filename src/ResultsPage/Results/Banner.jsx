import React from 'react';
import styles from "./results.module.css"

export function Banner({summaryBanner,numberResults,daneighborhood,zip}){
    return (
    <div className={styles.banner}>
        <div className={styles.summary}>
        {zip ? (<h2><strong>{summaryBanner}</strong> near {zip}</h2>): (<h2><strong>{summaryBanner}</strong> near {daneighborhood}</h2>)}
            
            <p>Showing {numberResults} results</p>
        </div>
    </div>
    )
}