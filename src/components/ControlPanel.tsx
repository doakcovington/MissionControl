import React from 'react';

const ControlPanel: React.FC = () => {
  return (
    <div className = "panel">
      <div className = 'retract'>
        <button>Retract Arm</button>
      </div>
      <div className = 'apu'>
        <button>Auxiliary Power Units</button>
      </div>
      <div className = 'external-tank'>
        <button>External Tank</button>
      </div>
      <div className = 'vent hood'>
        <button>Vent Hood</button>
      </div>
      <div className = 'boil-off-vent'>
        <button>Boil Off vent</button>
      </div>
      <div className = 'tls'>
        <button>Terminal Launch Sequence</button>
      </div>
      <div className = 'srb'>
        <button>Hydraulic Power Units</button>
      </div>
      <div className = 'destruct-system'>
        <button>Safety Destruct System</button>
      </div>
      <div className = 'main-engine'>
        <button>Main Engine</button>
      </div>
      <div className = 'launch'>
        <button>Launch</button>
      </div>
    </div>
  )
}

export default ControlPanel;