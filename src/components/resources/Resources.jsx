import React, {useState} from "react";
import "./resources.css";

import {Link} from "react-router-dom";

function Resources(){
    return(
        <div className="resources-container">
            <h2 className="resources-prompt">Life can sometimes become a little too much to handle. We are here
            to provide you with relieve you from work, stress or anxiety by suggesting activities and locations
            tailored to your interests.</h2>
            <h1 className="resources-questions">Looking for Help? Need someone to talk to?</h1>
            {/* <a className="resources-button" href="/resources-page">Helplines</a> */}
            <Link to="/resources-page" className="resources-button">Helplines</Link> 
            <h2 className="resources-prompt">You are not alone. Check out our resources and helplines and begin your path towards positivity. </h2>
        </div>
    )
}

export default Resources;