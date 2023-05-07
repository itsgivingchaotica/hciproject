import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import styles from '../../components/result/result.module.css';
import { Banner } from "../../components/banner/Banner.jsx"
import { SearchBar } from "../../components/searchbar/SearchBar.jsx"
import { MapLoader } from "../../components/map/MapLoader.jsx"
import { LocationCarousel } from "../../components/locationCarousel/LocationCarousel.jsx"

export function ResultDetails(props){

  const { id } = useParams();

  const { reviewName, photoOne, photoTwo, photoThree, zipCode, reviewLongitude, reviewLatitude, Address1, Address2, website, telephone, neighborhood, tag, blurb1, blurb2, blurb3, about} = props;

  // Use state to store the photo props
  // const [photoOneUrl, setPhotoOneUrl] = useState(photoOne);
  // const [photoTwoUrl, setPhotoTwoUrl] = useState(photoTwo);
  // const [photoThreeUrl, setPhotoThreeUrl] = useState(photoThree);
  // const [reviewNameResult,setReviewNameResult] = useState(reviewName);
  // const [addressOne,setAddressOne] = useState(Address1);
  // const [addressTwo,setAddressTwo] = useState(Address2);
  // const [websiteResult,setWebsiteResult] = useState(website)
  // const [telephoneResult,setTelephoneResult] = useState(telephone);
  // const [neighborhoodResult,setNeighborhoodResult] = useState(neighborhood);
  // const [tagResult,setTagResult] = useState(tag);
  // const [blurbOne,setBlurbOne] = useState(blurb1);
  // const [blurbTwo,setBlurbTwo] = useState(blurb2);
  // const [blurbThree,setBlurbThree] = useState(blurb3);
  // const [aboutResult,setAboutResult] = useState(about);

  // Use the useEffect hook to reload and reset the photo props
  // useEffect(() => {
  //   setPhotoOneUrl(photoOne);
  //   setPhotoTwoUrl(photoTwo);
  //   setPhotoThreeUrl(photoThree);
  //   setReviewNameResult(reviewName);
  //   setAddressOne(addressOne);
  //   setAddressTwo(addressTwo);
  //   setWebsiteResult(websiteResult);
  //   setTelephoneResult(telephoneResult);
  //   setNeighborhoodResult(neighborhoodResult);
  //   setTagResult(tagResult);
  //   setBlurbOne(blurbOne);
  //   setBlurbTwo(blurbTwo);
  //   setBlurbThree(blurbThree);
  //   setAboutResult(aboutResult);
  // }, [photoOne, photoTwo, photoThree]);

  return (

    <div className={styles.resultsDetails}>
    <div>
    <LocationCarousel reviewName={reviewName} blurb1={blurb1} blurb2={blurb2} blurb3={blurb3} about={about} photoOneUrl={photoOne} photoTwoUrl={photoTwo} photoThreeUrl={photoThree}/>
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
         Address: {Address1}<br></br>{Address2}{zipCode}<br></br>{telephone}<br></br>{website}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>About</Accordion.Header>
        <Accordion.Body>
          {about.replace(/\n/g, '\n\n').split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    {/* </div> */}
    </div>
      </div>
    </div>
  );
}
  