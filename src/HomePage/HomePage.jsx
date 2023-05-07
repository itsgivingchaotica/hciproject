import React, {useState} from "react";

import Header from "../components/header/Header.jsx";
import Carousel from "../components/carousel/Carousel.jsx"
import slides from "../components/carousel/carouselItems.json";

import Resources from '../components/resources/Resources';

function HomePage(){
    return(
        <div>
            <Header />
            <Carousel slides={slides}/>
            <Resources />
        </div>
    )
}

export default HomePage;