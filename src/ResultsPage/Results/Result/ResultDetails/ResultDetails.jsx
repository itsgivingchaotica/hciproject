import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import styles from '../result.module.css';
import { Banner } from "../../Banner.jsx"
import { SearchBar } from "../../../SearchBar/SearchBar.jsx"
import { MapLoader } from "../../../../Map/MapLoader.jsx"

export function ResultDetails(props){

  const { reviewName, photoOne, zipCode,reviewLongitude,reviewLatitude} = props;

  console.log(reviewName + " " + photoOne + " " + zipCode + " " + reviewLatitude + " " + reviewLongitude + " sources");
  return (
    <div className={styles.resultsDetails}>
    <div >
    <Carousel fade>
      <Carousel.Item>
        <img
          className={styles.photos}
          src={photoOne}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{reviewName}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.photos}
          src={photoOne}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{reviewName}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
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
  