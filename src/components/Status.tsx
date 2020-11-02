import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card';

const Status: React.FC = () => {
  return (
    <div>
      <CardGroup>
        <Card bg="danger">
          <Card.Body></Card.Body>
        </Card>
        <Card bg="warning">
          <Card.Body></Card.Body>
        </Card>
        <Card bg="success">
          <Card.Body></Card.Body>
        </Card>
      </CardGroup>
    </div>
  )
}

export default Status;