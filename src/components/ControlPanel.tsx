import React from 'react';
import Instructions from './Instructions';

const ControlPanel: React.FC<{ initial?: number }> = ({ initial = 0 }) => {
  const [steps, setSteps] = React.useState(initial);
  const [counter, setCounter] = React.useState(60);
  const [status, setStatus] = React.useState(initial);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const resetCounter = () => {
    setCounter(60);
  }

  const checkStatus = () => {
    console.log('status', status, 'steps', steps)
    if (status === steps) {
      console.log(true);
    } else {
      alert('You missed a step')
    }
  }

  const launch = () => {
    if (steps === 9) {
      alert("Launch!");
    }
  }

  const handleClick = () => {
    checkStatus();
    setSteps(steps + 1);
  }
  

  return (
    <div className = "panel">
      <div className= 'counter'>
        T-Minus: {counter} Seconds
      </div>
      <div className = 'steps'>
        <p>You've Completed Step: {steps}</p>
      </div>
      <div className='instructions'>
        <Instructions />
      </div>
      <div className = 'retract'>
        <button onClick={() => {
          handleClick();
          setStatus(1);
          }}>Retract Arm</button>
      </div>
      <div className = 'apu'>
        <button onClick={() => {
          handleClick();
          setStatus(2);
          }}>Auxiliary Power Units</button>
      </div>
      <div className = 'external-tank'>
        <button onClick={() => {
          handleClick();
          setStatus(3);
          }}>Liquid O2 Vent</button>
      </div>
      <div className = 'vent-hood'>
        <button onClick={() => {
          handleClick();
          setStatus(4);
          }}>Vent Hood</button>
      </div>
      <div className = 'boil-off-vent'>
        <button onClick={() => {
          handleClick();
          setStatus(5);
          }}>Boil Off vent</button>
      </div>
      <div className = 'tls'>
        <button onClick={() => {
          handleClick();
          setStatus(6);
          }}>Terminal Launch Sequence</button>
      </div>
      <div className = 'srb'>
        <button onClick={() => {
          handleClick();
          setStatus(7);
          }}>Hydraulic Power Units</button>
      </div>
      <div className = 'destruct-system'>
        <button onClick={() => {
          handleClick();
          setStatus(8);
          }}>Safety Destruct System</button>
      </div>
      <div className = 'main-engine'>
        <button onClick={() => {
          handleClick();
          setStatus(9);
          }}>Main Engine</button>
      </div>
      <div className = 'launch'>
        <button 
          onClick={() => {
            handleClick();
            launch();
            setStatus(2);
          }}>
          Launch
          </button>
      </div>
      <div>
        {steps === 10 ? <button onClick={() => {
          setSteps(0);
          resetCounter();
          setStatus(0);
          }}>
            New Game
          </button> : null}
      </div>
    </div>
  )
}

export default ControlPanel;