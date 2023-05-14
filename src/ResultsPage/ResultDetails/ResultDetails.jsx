import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './resultdetails.module.css';
import { DetailsCard } from "../../components/detailsCard/DetailsCard.jsx"
import { DetailsAccordion } from "../../components/detailsAccordion/DetailsAccordion.jsx"
import { MapLoader } from "../../components/map/MapLoader.jsx"
import { LocationCarousel } from "../../components/locationCarousel/LocationCarousel.jsx"

export function ResultDetails(props){

  const { id } = useParams();

  const { reviewName, photoOne, photoTwo, photoThree, zipCode, reviewLongitude, reviewLatitude, Address1, Address2, website, telephone, neighborhood, tag, blurb1, blurb2, blurb3, about} = props;

  return (

    <div className={styles.resultsDetails}>
      
      <div>
      <LocationCarousel reviewName={reviewName} blurb1={blurb1} blurb2={blurb2} blurb3={blurb3} about={about} photoOneUrl={photoOne} photoTwoUrl={photoTwo} photoThreeUrl={photoThree}/>
      </div>

    <div className={styles.locationinfo}>
    <br/>
    <h1>Location & Info</h1>
    </div>

    <div className={styles.infoContainer}>
    
      <div className={styles.mapContainer}>
      <MapLoader focus={15} longitude={reviewLongitude} latitude={reviewLatitude}/>
      </div>
      
      <div className={styles.cardContainer}>
      {/* <DetailsAccordion id={id} Address1={Address1} Address2={Address2} zipCode={zipCode} telephone={telephone} website={website} about={about}/> */}
      <DetailsCard id={id} reviewName={reviewName} Address1={Address1} Address2={Address2} zipCode={zipCode} telephone={telephone} website={website} about={about}/>
      </div>
      </div>
    </div>
  );
}
  