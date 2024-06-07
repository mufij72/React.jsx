import React from 'react';

const eight = () => {
  const a = [1, 2, 3];
  const arr = [4, 5, 6];
  const mergedArray = [...a, ...arr];

  return (
    <div>
      <h1>Merged Array</h1>
      <p>{mergedArray.join(', ')}</p>
    </div>
  );
};

export default eight;
