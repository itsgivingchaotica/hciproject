import React from 'react';
import { Card } from 'react-bootstrap'

export function DetailsCard({id,reviewName,Address1,Address2,zipCode,telephone,website,about}){
    return (
        <Card style={{ width: '30rem' }}>
        <Card.Body>
        <Card.Title>{reviewName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{Address1}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{Address2}, {zipCode}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{telephone}</Card.Subtitle>
        <Card.Text>
          {about.replace(/\n/g, '\n\n').split('\n').map((line, index) => (<React.Fragment key={index}>
         {line}
        <br />
       </React.Fragment>
     ))}
        </Card.Text>
        <Card.Link href={website} target="_blank" rel="noopener noreferrer">{website}</Card.Link>
      </Card.Body>
    </Card>
    )
    // <Accordion defaultActiveKey="0">
    //   <Accordion.Item eventKey="0">
    //     <Accordion.Header className={styles.details}>Contact</Accordion.Header>
    //     <Accordion.Body>
    //      Address: {Address1}<br></br>{Address2}{zipCode}<br></br>{telephone}<br></br>{website}
    //     </Accordion.Body>
    //   </Accordion.Item>
    //   <Accordion.Item eventKey="1">
    //     <Accordion.Header>About</Accordion.Header>
    //     <Accordion.Body>
    //       {about.replace(/\n/g, '\n\n').split('\n').map((line, index) => (
    //   <React.Fragment key={index}>
    //     {line}
    //     <br />
    //   </React.Fragment>
    // ))}
    //     </Accordion.Body>
    //   </Accordion.Item>
    // </Accordion>
    // </div>
}