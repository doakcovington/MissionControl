import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Instructions: React.FC = () => {
  return (
    <div>
      <ListGroup className="mt-3">
        <ListGroup.Item>Retract Orbiter Access Arm</ListGroup.Item>
        <ListGroup.Item>Activate the Auxiliary Power Units (APU)</ListGroup.Item>
        <ListGroup.Item>Close the Liquid Oxygen Vent on the External Tank</ListGroup.Item>
        <ListGroup.Item>Raise and Retract the External Tank Vent Hood</ListGroup.Item>
        <ListGroup.Item>Close the Boil Off Vent</ListGroup.Item>
        <ListGroup.Item>Start Terminal Launch Sequence</ListGroup.Item>
        <ListGroup.Item>Activate the Hydraulic Power Units</ListGroup.Item>
        <ListGroup.Item>Activate the Range Safety Destruct System</ListGroup.Item>
        <ListGroup.Item>Start Main Engines</ListGroup.Item>
        <ListGroup.Item>Launch</ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Instructions;