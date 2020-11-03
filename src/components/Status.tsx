import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

const Status: React.FC<{report?: boolean}> = ({report}) => {


  return (
    <div>
      <Card border="secondary">
        <Card.Body>
          <CardDeck>
          <Card  border="danger" bg={report == true ? "light" : "danger"}>
            <Card.Body></Card.Body>
          </Card>
          <Card  border="warning" bg={report == true ? "light" : "warning"}>
            <Card.Body></Card.Body>
          </Card>
          <Card  border="success" bg={report == true ? "success" : "light"}>
            <Card.Body></Card.Body>
          </Card>
          </CardDeck>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Status;