import React from 'react';

const CountdownTimer: React.FC<{timer: number}> = ({timer}) => {
  const [counter, setCounter] = React.useState(timer);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const resetCounter = () => {
    setCounter(60);
  }

  return (
    <div>
      Countdown: {counter > 0 ? counter : <button onClick={resetCounter}>Try Again</button> }
    </div>
  )
}

export default CountdownTimer;


