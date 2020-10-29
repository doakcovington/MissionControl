import React from 'react';
import NewGameButton from './NewGameButton';

const ControlPanel: React.FC<{ initial?: number }> = ({ initial = 0 }) => {
  const [steps, setSteps] = React.useState(initial);

  const launch = () => {
    if (steps === 10) {
      alert("Launch!")
    }
  }
  
  return (
    <div className = "panel">
      <div className = 'steps'>
        <p>You've Completed Step: {steps}</p>
      </div>
      <div className = 'retract'>
        <button onClick={() => setSteps(1)}>Retract Arm</button>
      </div>
      <div className = 'apu'>
        <button onClick={() => setSteps(2)}>Auxiliary Power Units</button>
      </div>
      <div className = 'external-tank'>
        <button onClick={() => setSteps(3)}>External Tank</button>
      </div>
      <div className = 'vent-hood'>
        <button onClick={() => setSteps(4)}>Vent Hood</button>
      </div>
      <div className = 'boil-off-vent'>
        <button onClick={() => setSteps(5)}>Boil Off vent</button>
      </div>
      <div className = 'tls'>
        <button onClick={() => setSteps(6)}>Terminal Launch Sequence</button>
      </div>
      <div className = 'srb'>
        <button onClick={() => setSteps(7)}>Hydraulic Power Units</button>
      </div>
      <div className = 'destruct-system'>
        <button onClick={() => setSteps(8)}>Safety Destruct System</button>
      </div>
      <div className = 'main-engine'>
        <button onClick={() => setSteps(9)}>Main Engine</button>
      </div>
      <div className = 'launch'>
        <button 
          onClick={() => {
            setSteps(10);
            launch();
          }}>
          Launch
          </button>
      </div>
      <NewGameButton />
    </div>
  )
}

export default ControlPanel;