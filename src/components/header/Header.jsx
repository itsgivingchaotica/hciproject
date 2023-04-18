import React from "react";
import { useState } from "react";
import "./header.css"
import Liberty from "../liberty/Liberty";

function Header() {

    return (
        <div className="container-header">
            <h1 className="header">
                Looking for Something to do in NYC? You're Only a few Questions away!
            </h1>

            {/* <button className="btn">Explore Now</button> */}

            <div className="cta">
                <h2 className="cta-text">
                    Use our interactive experience and allow us to learn about you and prepare suggestions which align with your interests! Discover:
                </h2>
                <ul className="places">
                    <li>Museums</li>
                    <li>Parks</li>
                </ul>
                <ul className="places">    
                    <li>Gyms</li>
                    <li>And more</li>
                </ul>    

                <h2 className="cta-text">You will easily find something to destress</h2>
                <a href="/" className="cta-btn">Take Survey</a>
            </div>

            <div className="scenery">
                <img className="bridge-image" src="https://cdn.contexttravel.com/image/upload/v1571947407/blog/36%20Hours%20in%20NYC/NewYorkBridge.jpg"></img>
                <img className="city-image" src="https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.jpg?b=1&s=170667a&w=0&k=20&c=pSGVgYmze-7eDhOt6jr5xgfVKbwDeh969KLEt-isd1A="></img>
            </div>
            <Liberty className="liberty"/>
        </div>
    )
}    

export default Header