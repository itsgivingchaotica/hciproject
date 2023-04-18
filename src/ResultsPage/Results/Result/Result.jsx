import React, { useState, useEffect } from 'react';
import styles from './result.module.css';
import { Card } from 'react-bootstrap'
import Placeholder from 'react-bootstrap/Placeholder';
import { HashRouter as Router, Link, Routes, Route} from 'react-router-dom'
import { LocationRating } from '../../../Rating/Rating.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { ResultDetails } from './ResultDetails/ResultDetails.jsx'

export function Result({result, results, reviewName, setReviewName,setZipcode,setPhoto1,setPhoto2,setPhoto3,setAddress1,setAddress2,setWebsite,setTelephone,setNeighborhood,setTag,setBlurb1,setBlurb2,setBlurb3,setAbout, setSummaryBanner,setReviewLatitude,setReviewLongitude}){
    const resultName = result.name;
    const resultZip = result.zipcode;
    const resultLatitude = result.Latitude;

    console.log("Result resultsssss : " + result.name + " " + result);

    console.log(result.latitude + " " + result.longitude);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // set the delay time to 2 seconds
    }, []);

    // if isLoading is true, render the skeleton card
    if (isLoading) {
        return (
            <div className={styles.result}>
                <Placeholder as={Card.Img} variant="top" style={{ height: '200px', width: '200px'}} className={styles['result-image']}/>
                <Card border="secondary" style={{ width: '600px', height: '200px', display:'flex', marginLeft: '25px', marginRight: '25px' }} className={styles.address}>
                    <Card.Body>
                        <Placeholder as={Card.Title} animation="glow" style={{ height: '200px', width:'600px' }}>
                        <Placeholder xs={6} />
      <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow" style={{ height: '20px' }}>
                            <Placeholder s={8} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow" style={{ height: '20px' }}>
                            <Placeholder m={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow" style={{ height: '10px' }}>
                            <Placeholder l={6} />
                        </Placeholder>
                    </Card.Body>
                </Card>
            </div>
        );
    
    }

    const handleSetName = (nombre,zip,photo1,photo2,photo3,latitude,longitude,Address1,Address2,website,telephone,neighborhood,tag,blurb1,blurb2,blurb3,about) => {
        setReviewName(nombre);
        console.log(nombre + " " + photo1 + " " + zip + " is hte handledrs")
        setZipcode(zip);
        setPhoto1(photo1);
        setPhoto2(photo2);
        setPhoto3(photo3);
        setAddress1(Address1);
        setAddress2(Address2);
        setWebsite(website);
        setTelephone(telephone);
        setNeighborhood(neighborhood);
        setTag(tag);
        setBlurb1(blurb1);
        setBlurb2(blurb2);
        setBlurb3(blurb3);
        setAbout(about);
        console.log(latitude);
        console.log(longitude + " were the lat and long ");
        setReviewLatitude(latitude);
        setReviewLongitude(longitude);
        setSummaryBanner(nombre);
    }
    const handleCardClick = (latitude,longitude) => {
        setReviewLatitude(latitude);
        setReviewLongitude(longitude)
    }

    return (
        <div className = {styles.result}>
            <Link to={`/results/${result.id}`} key={result.id}>
            <img src={result.photo1} alt="result image" className={styles['result-image']}></img></Link>
                <div className={styles.info} onClick={() => handleCardClick(result.latitude,result.longitude)}>
                     <Card border="secondary" className={ styles.address }>
                        <Card.Header>
                            <LocationRating rating={result.rating}/>
                        </Card.Header>
                                <Card.Body>
                                    <Card.Title className ={styles.share}> {result.name} <br/> <Link to={`/results/${result.id}`} onClick={() => handleSetName(result.name,result.zipcode,result.photo1,result.photo2,result.photo3,result.latitude,result.longitude,result.Address1,result.Address2,result.website,result.telephone,result.neighborhood,result.tag,result.blurb1,result.blurb2,result.blurb3,result.about)}><FontAwesomeIcon icon={faAnglesRight}/></Link>
                                    </Card.Title>
                                    {/* <Routes>
                                    <Route path="/results/:id" element={<ResultDetails result={result}/>} />
                                    </Routes> */}
                                <Card.Text>
                                {result.neighborhood}
                                </Card.Text>
                                </Card.Body>
                    </Card>
                </div>
        </div>
    )
}