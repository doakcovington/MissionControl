import React from 'react';
import ControlPanel from './ControlPanel';
import Instructions from './Instructions';
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'

const FlightControl: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ControlPanel />
        </Col>
        <Col>
          <Instructions />
        </Col>
      </Row>
    </Container>
  )
}

export default FlightControl;