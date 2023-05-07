import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../result/result.module.css';

export function LocationCarousel(props) {

  const { reviewName, photoOne, photoTwo, photoThree, blurb1, blurb2, blurb3, photoOneUrl, photoTwoUrl, photoThreeUrl} = props;
  console.log(props);
    return (
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
    )
}
