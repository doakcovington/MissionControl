import React from 'react';
import ControlPanel from './ControlPanel';
import Instructions from './Instructions';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const FlightControl: React.FC = () => {
  const [start, setStart] = React.useState(false);

  // return (
  //   <div>
  //     <button onClick={() => {setStart(true)}}>Start</button>
  //     {start === true ?       <Container>
  //     <Row>
  //       <Col>
  //         <ControlPanel />
  //       </Col>
  //       <Col>
  //         <Instructions />
  //       </Col>
  //     </Row>
  //     </Container> : null}
  //   </div>
  // )
  if (start === false) {
    return (<Button onClick={() =>  {setStart(true)}}>Start</Button>)
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