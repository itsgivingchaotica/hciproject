import React, {useState} from "react";
import "./carousel.css";
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import Liberty from "../liberty/Liberty";


function Carousel({slides}) {

    return(
        <div>
        <div className="carousel-container">
            <Swiper className="carousel" modules={[Navigation, Pagination, A11y]}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            {slides.map((slide) => (
                <SwiperSlide key={slide.title}>
                    {/* <img src={slide.image} alt={slide.title} /> */}
                    <h1 className="testimonial">{slide.subtitle}</h1>
                    <img className="testimonial-image" src={slide.image} alt={slide.title} />
                    <h2 className="testimonial-person">{slide.person}</h2>
                </SwiperSlide>))}
                {/* <SwiperSlide>Slide 1</SwiperSlide> */}           
            </Swiper>
        </div>
        <Liberty />
        </div>
        

        
    )
}

export default Carousel
