import React from 'react';
import styles from './result.module.css';
import { Card } from 'react-bootstrap'
import { LocationRating } from '../../../Rating/Rating.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare, faPen} from '@fortawesome/free-solid-svg-icons'

export function Result(){
    return (
        <div className = {styles.result}>
            <img src='https://via.placeholder.com/200' alt="result image" className={styles['result-image']}></img>
                <div className={styles.info}>
                    {/* <h2>General Info</h2>
                    <div className = {styles.writeReview}>
                    <LocationRating/>
                    <FontAwesomeIcon icon={faPen}/>
                    </div>
                    <div className = {styles.address}>
                        <h5>Address<br/>Data</h5> 
                        <FontAwesomeIcon icon={faShareFromSquare} style={{color:"green"}} />
                    </div> */}
                     <Card border="secondary" className={ styles.address }>
        <Card.Header><LocationRating/></Card.Header>
        <Card.Body>
          <Card.Title className ={styles.share}> Title <br/> <FontAwesomeIcon icon={faShareFromSquare}/></Card.Title>
          <Card.Text>
            Address<br/>info
          </Card.Text>
        </Card.Body>
      </Card>
                </div>
        </div>
    )
}