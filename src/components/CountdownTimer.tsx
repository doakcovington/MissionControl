import React from 'react';

const CountdownTimer: React.FC = () => {
  const [counter, setCounter] = React.useState(60);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div>
      Countdown: {counter}
    </div>
  )
}

export default CountdownTimer;


