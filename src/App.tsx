import React from "react";
import './App.css';

import CountdownTimer from "./components/CountdownTimer";
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <div className="App">
      <CountdownTimer />
      <ControlPanel />
    </div>
  );
}

export default App;
