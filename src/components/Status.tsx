import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

const Status: React.FC<{report?: boolean}> = ({report}) => {


  return (
    <div>
      <CardDeck>
        <Card  border="danger" bg={report == true ? "danger" : "light"}>
          <Card.Body></Card.Body>
        </Card>
        <Card  border="warning" bg={report == true ? "warning" : "light"}>
          <Card.Body></Card.Body>
        </Card>
        <Card  border="success" bg={report == true ? "success" : "light"}>
          <Card.Body></Card.Body>
        </Card>
      </CardDeck>
    </div>
  )
}

export default Status;