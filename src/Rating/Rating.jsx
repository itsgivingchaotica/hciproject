import React from 'react';
import styles from './rating.module.css';
import Rating from 'react-rating';

export function LocationRating(){
    return(
        <div className={styles.rating}>
            <Rating 
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            initialRating={3}
            readonly
            />
        </div>
    )
}