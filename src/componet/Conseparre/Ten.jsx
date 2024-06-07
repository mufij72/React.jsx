import React from 'react';

const Ten = () => {
  const a = ["mango", "orange", "mango", "apple", "apple", "pineapple", "apple","mango", "orange"];

  // Function to count occurrences of each element
  const countOccurrences = (arr) => {
    return arr.reduce((acc, fruit) => {
      acc[fruit] = (acc[fruit] || 0) + 1;
      return acc;
    }, {});
  };

  const counts = countOccurrences(a);

  return (
    <div>
      <h1>Fruit Counts</h1>
      <ul>
        {Object.entries(counts).map(([fruit, count]) => (
          <li key={fruit}>
            {fruit}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ten;
