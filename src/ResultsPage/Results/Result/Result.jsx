import React from 'react';
import styles from './result.module.css';
import { Card } from 'react-bootstrap'
import { LocationRating } from '../../../Rating/Rating.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons'

export function Result({result}){
    return (
        <div className = {styles.result}>
            <img src='https://via.placeholder.com/200' alt="result image" className={styles['result-image']}></img>
                <div className={styles.info}>
                     <Card border="secondary" className={ styles.address }>
                        <Card.Header>
                            <LocationRating />
                        </Card.Header>
                                <Card.Body>
                                    <Card.Title className ={styles.share}> {result.name} <br/> <FontAwesomeIcon icon={faShareFromSquare}/>
                                    </Card.Title>
                                <Card.Text>
                                Address<br/>info
                                </Card.Text>
                                </Card.Body>
                    </Card>
                </div>
        </div>
    )
}