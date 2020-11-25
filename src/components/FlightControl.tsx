import React from 'react';
import ControlPanel from './ControlPanel';
import Instructions from './Instructions';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const FlightControl: React.FC = () => {
  const [start, setStart] = React.useState(false);

  if (start === false) {
    return (
    <Container>
      <h1>Mission Control</h1>
      <Row>
        <Col className="mt-4">
          <Button size="lg" onClick={() =>  {setStart(true)}}>Start</Button>
        </Col>
      </Row>
    </Container>)
  } else {
    return (
      <div>
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
    </div>
    )
  }
}

export default FlightControl;