import React from 'react';

const Array = () => {
  // Simple array
  const simpleArray = ['apple', 'banana', 'cherry'];

  // Array of objects using a list of keys
  const keys = ['name', 'style'];
  const dataList = [
    ['apple', { color: 'red' }],
    ['banana', { color: 'yellow' }],
    ['cherry', { color: 'red' }]
  ];

  const arrayOfObjects = dataList.map((data) => {
    let obj = {};
    keys.forEach((key, index) => {
      obj[key] = data[index];
    });
    return obj;
  });

  return (
    <div>
      <h2>Simple Array</h2>
      <ul>
        {simpleArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Array of Objects</h2>
      <ul>
        {arrayOfObjects.map((item, index) => (
          <li key={index}>
            {keys.map((key) => (
              <span key={key}>
                {key}: {key === 'style' ? <span style={item[key]}>colored text</span> : item[key]}{' '}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Array;
