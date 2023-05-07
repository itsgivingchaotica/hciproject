import React, {useState} from "react";
import "./resourcespage.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {Accordion} from "react-bootstrap";

function ResourcesPage({accordionItems}){
    return(
        <div className="resource-page-container">

        <h1 className="heading">Helplines</h1>

        <h1 className="subheading">Experiencing a crisis? Try these resources if our suggested locations/events are not
        enough and you feel the need to talk to someone:</h1>

        <Accordion defaultActiveKey="0" className="mt-4 p-2">

            {accordionItems.map((accordionItem) => (
            <Accordion.Item eventKey={accordionItem.key} className="item">
                <Accordion.Header><h2 className="helpline-title">{accordionItem.header}</h2></Accordion.Header>
                <Accordion.Body><h4 className="helpline-text">{accordionItem.body}</h4></Accordion.Body>
            </Accordion.Item>))}

            {/* <Accordion.Item eventKey="1" className="item">
                <Accordion.Header>Accordion Header 1</Accordion.Header>
                <Accordion.Body>Accordion 1 body</Accordion.Body>
            </Accordion.Item> */}
        </Accordion>

            {/* <h2 className="helpline-title">ANAD - Eating Disorders Helpline</h2>
            <h4 className="helpline-text">Contact ANAD at 1(888)-375-7767</h4> */}

        </div>
    )
}

export default ResourcesPage;