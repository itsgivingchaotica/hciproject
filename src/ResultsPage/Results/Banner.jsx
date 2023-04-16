import React from 'react';
import styles from "./results.module.css"

export function Banner({summaryBanner}){
    return (
    <div className={styles.banner}>
        <div className={styles.summary}>
            <h2><strong>{summaryBanner}</strong> near Prospect Park</h2>
            <p>Showing 10 results</p>
        </div>
    </div>
    )
}