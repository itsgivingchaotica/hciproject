import React from 'react'
import styles from './details.css';
import Accordion from 'react-bootstrap/Accordion';

export function DetailsAccordion({id,Address1,Address2,zipCode,telephone,website,about}){

    return (
<div>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className={styles.details}>Contact</Accordion.Header>
        <Accordion.Body>
         Address: {Address1}<br></br>{Address2}{zipCode}<br></br>{telephone}<br></br>{website}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>About</Accordion.Header>
        <Accordion.Body>
          {about.replace(/\n/g, '\n\n').split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    )
}