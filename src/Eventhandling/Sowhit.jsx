import React, { useState } from 'react';

export default function ConditionalRendering() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div>
      <h2>Conditional Rendering Example</h2>
      <button
        onClick={toggleVisibility}
        style={{
          padding: '10px 20px',
          backgroundColor: isVisible ? 'green' : 'red',
          color: isVisible ? 'lightred':'lightgreen',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '10px'
        }}
      >
        {isVisible ? 'Hide' : 'Show'} Message
      </button>
      {isVisible && <p style={{ color:'green'}}>This is a conditionally rendered message.</p>}
    </div>
  );
}
