import React, { useState, useEffect } from "react";
import styles from "./result.module.css";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import Placeholder from "react-bootstrap/Placeholder";
import { HashRouter as Router, Link, Routes, Route } from "react-router-dom";
import { LocationRating } from "../rating/Rating.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function Result({
  result,
  results,
  reviewName,
  setReviewName,
  setZipcode,
  setPhoto1,
  setPhoto2,
  setPhoto3,
  setAltText1,
  setAltText2,
  setAltText3,
  setAddress1,
  setAddress2,
  setWebsite,
  setTelephone,
  setNeighborhood,
  setTag,
  setBlurb1,
  setBlurb2,
  setBlurb3,
  setAbout,
  setSummaryBanner,
  setReviewLatitude,
  setReviewLongitude,
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // set the delay time to 2 seconds
  }, []);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Go to details
    </Tooltip>
  );

  // if isLoading is true, render the skeleton card
  if (isLoading) {
    return (
      <div className={styles.result}>
        <Placeholder
          as={Card.Img}
          variant="top"
          style={{ height: "200px", width: "200px" }}
          className={styles["result-image"]}
        />
        <Card
          border="secondary"
          style={{
            width: "600px",
            height: "200px",
            display: "flex",
            marginLeft: "25px",
            marginRight: "25px",
          }}
          className={styles.address}
        >
          <Card.Body>
            <Placeholder
              as={Card.Title}
              animation="glow"
              style={{ height: "200px", width: "600px" }}
            >
              <Placeholder xs={6} />
              <Placeholder className="w-75" />{" "}
              <Placeholder style={{ width: "25%" }} />
            </Placeholder>
            <Placeholder
              as={Card.Text}
              animation="glow"
              style={{ height: "20px" }}
            >
              <Placeholder s={8} />
            </Placeholder>
            <Placeholder
              as={Card.Text}
              animation="glow"
              style={{ height: "20px" }}
            >
              <Placeholder m={6} />
            </Placeholder>
            <Placeholder
              as={Card.Text}
              animation="glow"
              style={{ height: "10px" }}
            >
              <Placeholder l={6} />
            </Placeholder>
          </Card.Body>
        </Card>
      </div>
    );
  }

  const handleSetName = (
    nombre,
    zip,
    photo1,
    photo2,
    photo3,
    altText1,
    altText2,
    altText3,
    latitude,
    longitude,
    Address1,
    Address2,
    website,
    telephone,
    neighborhood,
    tag,
    blurb1,
    blurb2,
    blurb3,
    about
  ) => {
    setReviewName(nombre);
    console.log(nombre + " " + photo1 + " " + zip + " is hte handledrs");
    setZipcode(zip);
    setPhoto1(photo1);
    setPhoto2(photo2);
    setPhoto3(photo3);
    setAltText1(altText1);
    setAltText2(altText2);
    setAltText3(altText3);
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
    setReviewLatitude(latitude);
    setReviewLongitude(longitude);
    setSummaryBanner(nombre);
  };
  const handleCardClick = (latitude, longitude) => {
    setReviewLatitude(latitude);
    setReviewLongitude(longitude);
  };
  const handleSetNameWrapper = (event) => {
    const {
      nombre,
      zip,
      photo1,
      photo2,
      photo3,
      altText1,
      altText2,
      altText3,
      latitude,
      longitude,
      Address1,
      Address2,
      website,
      telephone,
      neighborhood,
      tag,
      blurb1,
      blurb2,
      blurb3,
      about,
    } = result;
    if (event.type === "click") {
      handleSetName(
        nombre,
        zip,
        photo1,
        photo2,
        photo3,
        altText1,
        altText2,
        altText3,
        latitude,
        longitude,
        Address1,
        Address2,
        website,
        telephone,
        neighborhood,
        tag,
        blurb1,
        blurb2,
        blurb3,
        about
      );
    } else if (event.type === "keydown") {
      if (event.keyCode === 13) {
        // Enter key
        handleSetName(
          nombre,
          zip,
          photo1,
          photo2,
          photo3,
          altText1,
          altText2,
          altText3,
          latitude,
          longitude,
          Address1,
          Address2,
          website,
          telephone,
          neighborhood,
          tag,
          blurb1,
          blurb2,
          blurb3,
          about
        );
      }
    }
  };

  return (
    <div className={styles.result}>
      <Link to={`/results/${result.id}`} key={result.id}>
        <img
          src={result.photo1}
          alt={`${result.altText1} clickable result image`}
          className={styles["result-image"]}
          onClick={handleSetNameWrapper}
          onKeyDown={handleSetNameWrapper}
        ></img>
      </Link>
      <div
        className={styles.info}
        onClick={() => handleCardClick(result.latitude, result.longitude)}
      >
        <Card className={styles.address}>
          <Card.Header>
            <LocationRating rating={result.rating} />
          </Card.Header>
          <Card.Body>
            <Card.Title className={styles.share}>
              {" "}
              {result.name} <br />{" "}
              <Link
                to={`/results/${result.id}`}
                onClick={() =>
                  handleSetName(
                    result.name,
                    result.zipcode,
                    result.photo1,
                    result.photo2,
                    result.photo3,
                    result.altText1,
                    result.altText2,
                    result.altText3,
                    result.latitude,
                    result.longitude,
                    result.Address1,
                    result.Address2,
                    result.website,
                    result.telephone,
                    result.neighborhood,
                    result.tag,
                    result.blurb1,
                    result.blurb2,
                    result.blurb3,
                    result.about
                  )
                }
              >
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <FontAwesomeIcon icon={faAnglesRight} />
                </OverlayTrigger>
              </Link>
            </Card.Title>
            <Card.Text>{result.neighborhood}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
