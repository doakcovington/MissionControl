import React from 'react';

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
      setStatus(status + 1);
    } else {
      console.log(false);
    }
  }

  const launch = () => {
    if (steps === 9) {
      alert("Launch!");
    }
  }

  const handleClick = () => {
    setSteps(1);
    checkStatus();
  }
  

  return (
    <div className = "panel">
      <div className= 'counter'>
        T-Minus: {counter} Seconds
      </div>
      <div className = 'steps'>
        <p>You've Completed Step: {steps}</p>
      </div>
      <div className = 'retract'>
        <button onClick={() => {
          handleClick();
          }}>Retract Arm</button>
      </div>
      <div className = 'apu'>
        <button onClick={() => {
          checkStatus();
          setSteps(2);
          }}>Auxiliary Power Units</button>
      </div>
      <div className = 'external-tank'>
        <button onClick={() => {
          setSteps(3)
          checkStatus();
          }}>External Tank</button>
      </div>
      <div className = 'vent-hood'>
        <button onClick={() => {
          setSteps(4);
          setStatus(4);
          checkStatus();
          }}>Vent Hood</button>
      </div>
      <div className = 'boil-off-vent'>
        <button onClick={() => {
          setSteps(5);
          setStatus(5);
          checkStatus();
          }}>Boil Off vent</button>
      </div>
      <div className = 'tls'>
        <button onClick={() => {
          setSteps(6)
          setStatus(6);
          checkStatus();
          }}>Terminal Launch Sequence</button>
      </div>
      <div className = 'srb'>
        <button onClick={() => {
          setSteps(7);
          setStatus(7);
          checkStatus();
          }}>Hydraulic Power Units</button>
      </div>
      <div className = 'destruct-system'>
        <button onClick={() => {
          setSteps(8);
          setStatus(8);
          checkStatus();
          }}>Safety Destruct System</button>
      </div>
      <div className = 'main-engine'>
        <button onClick={() => {
          setSteps(9);
          setStatus(9);
          checkStatus();
          }}>Main Engine</button>
      </div>
      <div className = 'launch'>
        <button 
          onClick={() => {
            setSteps(10);
            setStatus(10);
            checkStatus();
            launch();
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