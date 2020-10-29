import React from 'react';

const NewGameButton: React.FC<{status: number}> = ({status}) => {
  return (
    <div>
      {status === 10 ? <button>New Game</button> : null}
    </div>
  )
}

export default NewGameButton;