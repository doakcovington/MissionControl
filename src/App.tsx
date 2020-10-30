import React from "react";
import './App.css';
import FlightControl from './components/FlightControl';
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <div className="App">
      <FlightControl />
      <ControlPanel />
    </div>
  );
}

export default App;
