import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import styles from '../result.module.css';
import { Banner } from "../../Banner.jsx"
import { SearchBar } from "../../../SearchBar/SearchBar.jsx"
import { MapLoader } from "../../../../Map/MapLoader.jsx"

export function ResultDetails(props){

  const { id } = useParams();

  const { result, reviewName, photoOne, photoTwo, photoThree, zipCode,reviewLongitude,reviewLatitude} = props;

  console.log(reviewName + " " + photoOne + " " + photoTwo + " " + photoThree + " " + zipCode + " " + reviewLatitude + " " + reviewLongitude + " sources");

  // Use state to store the photo props
  const [photoOneUrl, setPhotoOneUrl] = useState(photoOne);
  const [photoTwoUrl, setPhotoTwoUrl] = useState(photoTwo);
  const [photoThreeUrl, setPhotoThreeUrl] = useState(photoThree);

  // Use the useEffect hook to reload and reset the photo props
  useEffect(() => {
    setPhotoOneUrl(photoOne);
    setPhotoTwoUrl(photoTwo);
    setPhotoThreeUrl(photoThree);
  }, [photoOne, photoTwo, photoThree]);

  return (

//     <Carousel.Item key={`${photoOne}-1`} onTouchStart={(e) => {
//   // Add the passive option to the touchstart event listener
//   e.preventDefault(); 
// }} passive={true}>
//   <img
//     className={styles.photos}
//     src={photoOneUrl}
//     alt="First slide"
//   />
//   <Carousel.Caption>
//     <h3>{reviewName}</h3>
//     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//   </Carousel.Caption>
// </Carousel.Item>

    <div className={styles.resultsDetails}>
    <div >
    <Carousel fade>
      <Carousel.Item key={`${photoOne}-1`} onTouchStart={(e) => {
        e.preventDefault(); 
      }} passive="true">
        <img
          className={styles.photos}
          src={photoOneUrl}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{reviewName}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item key={`${photoTwo}-2`}>
        <img
          className={styles.photos}
          src={photoTwoUrl}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>{reviewName}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item key={`${photoThree}-3`}>
        <img
          className="d-block w-100"
          src={photoThreeUrl}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div>
    <strong>Location & Info</strong>
    </div>
      <MapLoader focus={15} longitude={reviewLongitude} latitude={reviewLatitude}/>
    </div>
  );
}
  