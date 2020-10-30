import React from 'react';
import CountdownTimer from './CountdownTimer';

const FlightControl: React.FC = () => {
  return (
    <div>
      <CountdownTimer timer={60}/>
    </div>
  )
}

export default FlightControl;