import React, { useState } from 'react';

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div>
      <h2>Toggle Button Example</h2>
      <button
        onClick={toggleButton}
        style={{
          padding: '10px 20px',
          backgroundColor: isOn ? 'green' : 'red',
          color: isOn? 'Lightred' : 'lightgreen',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}
