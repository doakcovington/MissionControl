import React from 'react';
import Button from 'react-bootstrap/Button';

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
      <div className="mb-2">
        <Button variant="outline-dark" onClick={() => {
          handleClick();
          setStatus(1);
          }}>Retract Arm</Button>
      </div>
      <div className="mb-2">
        <Button variant="outline-dark" onClick={() => {
          handleClick();
          setStatus(2);
          }}>Auxiliary Power Units</Button>
      </div>
      <div className="mb-2">
        <Button variant="outline-dark" onClick={() => {
          handleClick();
          setStatus(3);
          }}>Liquid O2 Vent</Button>
      </div>
      <div className="mb-2">
        <Button variant="outline-dark" onClick={() => {
          handleClick();
          setStatus(4);
          }}>Vent Hood</Button>
      </div>
      <div className="mb-2">
        <Button variant="outline-dark" onClick={() => {
          handleClick();
          setStatus(5);
          }}>Boil Off vent</Button>
      </div>
      <div className="mb-2">
        <Button variant="outline-dark" onClick={() => {
          handleClick();
          setStatus(6);
          }}>Terminal Launch Sequence</Button>
      </div>
      <div className="mb-2">
        <Button variant="outline-dark" onClick={() => {
          handleClick();
          setStatus(7);
          }}>Hydraulic Power Units</Button>
      </div>
      <div className="mb-2">
        <Button variant="outline-dark" onClick={() => {
          handleClick();
          setStatus(8);
          }}>Safety Destruct System</Button>
      </div>
      <div className="mb-2">
        <Button variant="outline-dark" onClick={() => {
          handleClick();
          setStatus(9);
          }}>Main Engine</Button>
      </div>
      <div className="mb-2">
        <Button variant="danger"
          onClick={() => {
            handleClick();
            launch();
            setStatus(2);
          }}>
          Launch
          </Button>
      </div>
      <div>
        {steps === 10 ? <Button onClick={() => {
          setSteps(0);
          resetCounter();
          setStatus(0);
          }}>
            New Game
          </Button> : null}
      </div>
    </div>
  )
}

export default ControlPanel;