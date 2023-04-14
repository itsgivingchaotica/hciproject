import React from 'react';
import styles from "./results.module.css"

export function Banner(){
    return (
    <div className={styles.banner}>
        <div className={styles.summary}>
            <h2><strong>parks</strong> near Prospect Park</h2>
            <p>Showing 10 results</p>
        </div>
    </div>
    )
}