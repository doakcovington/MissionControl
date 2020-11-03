import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

const Status: React.FC<{report?: boolean, time: number}> = ({report, time}) => {


  return (
    <div>
      <Card border="secondary">
        <Card.Body>
          <CardDeck>
          <Card  border="danger" bg={report == true ? "light" : "danger"}>
            <Card.Body></Card.Body>
          </Card>
          <Card  border="warning" bg={time < 30 ? "warning" : "light" }>
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