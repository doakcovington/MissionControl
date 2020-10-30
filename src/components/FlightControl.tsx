import React from 'react';
import CountdownTimer from './CountdownTimer';
import ControlPanel from './ControlPanel';

const FlightControl: React.FC = () => {
  return (
    <div>
      <CountdownTimer timer={60}/>
      <ControlPanel />
    </div>
  )
}

export default FlightControl;