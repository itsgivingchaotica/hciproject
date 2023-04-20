import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion'
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import styles from '../result.module.css';
import { Banner } from "../../Banner.jsx"
import { SearchBar } from "../../../SearchBar/SearchBar.jsx"
import { MapLoader } from "../../../../Map/MapLoader.jsx"

export function ResultDetails(props){

  const { id } = useParams();

  const { result, reviewName, photoOne, photoTwo, photoThree, zipCode, reviewLongitude, reviewLatitude, Address1, Address2, website, telephone, neighborhood, tag, blurb1, blurb2, blurb3, about} = props;

  // Use state to store the photo props
  const [photoOneUrl, setPhotoOneUrl] = useState(photoOne);
  const [photoTwoUrl, setPhotoTwoUrl] = useState(photoTwo);
  const [photoThreeUrl, setPhotoThreeUrl] = useState(photoThree);
  const [reviewNameResult,setReviewNameResult] = useState(reviewName);
  const [addressOne,setAddressOne] = useState(Address1);
  const [addressTwo,setAddressTwo] = useState(Address2);
  const [websiteResult,setWebsiteResult] = useState(website)
  const [telephoneResult,setTelephoneResult] = useState(telephone);
  const [neighborhoodResult,setNeighborhoodResult] = useState(neighborhood);
  const [tagResult,setTagResult] = useState(tag);
  const [blurbOne,setBlurbOne] = useState(blurb1);
  const [blurbTwo,setBlurbTwo] = useState(blurb2);
  const [blurbThree,setBlurbThree] = useState(blurb3);
  const [aboutResult,setAboutResult] = useState(about);

  // Use the useEffect hook to reload and reset the photo props
  useEffect(() => {
    setPhotoOneUrl(photoOne);
    setPhotoTwoUrl(photoTwo);
    setPhotoThreeUrl(photoThree);
    setReviewNameResult(reviewNameResult);
    setAddressOne(addressOne);
    setAddressTwo(addressTwo);
    setWebsiteResult(websiteResult);
    setTelephoneResult(telephoneResult);
    setNeighborhoodResult(neighborhoodResult);
    setTagResult(tagResult);
    setBlurbOne(blurbOne);
    setBlurbTwo(blurbTwo);
    setBlurbThree(blurbThree);
    setAboutResult(aboutResult);
  }, [photoOne, photoTwo, photoThree]);

  return (

    <div className={styles.resultsDetails}>
    <div >
    <Carousel fade>
      <Carousel.Item key={`${photoOne}-1`}>
        <img
          className={styles.photos}
          src={photoOneUrl}
          alt="First slide"
        />
        <Carousel.Caption className={styles.blurb}>
          <h3>{reviewName}</h3>
          <p>{blurb1}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item key={`${photoTwo}-2`}>
        <img
          className={styles.photos}
          src={photoTwoUrl}
          alt="Second slide"
        />
        <Carousel.Caption className={styles.blurb}>
          <h3>{reviewName}</h3>
          <p>{blurb2}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item key={`${photoThree}-3`}>
        <img
          className="d-block w-100"
          src={photoThreeUrl}
          alt="Third slide"
        />

        <Carousel.Caption className={styles.blurb}>
          <h3>{reviewName}</h3>
          <p>
            {blurb3}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className={styles.locationinfo}>
    <br/>
    <strong>Location & Info</strong>
    </div>
    <div className={styles.infoContainer}>
    <div className={styles.mapContainer}>
      <MapLoader focus={15} longitude={reviewLongitude} latitude={reviewLatitude}/>
      </div>
      <div className={styles.accordionContainer}>
      <Accordion defaultActiveKey="0" className={styles.customAccordion}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Contact</Accordion.Header>
        <Accordion.Body>
         Address: {addressOne}<br></br>{addressTwo}{zipCode}<br></br>{telephone}<br></br>{website}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>About</Accordion.Header>
        <Accordion.Body>
          {aboutResult}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    {/* </div> */}
    </div>
      </div>
    </div>
  );
}
  