// src/LeapYearChecker.js
import React, { useState } from 'react';

const seven = () => {
  const [year, setYear] = useState('');
  const [isLeapYear, setIsLeapYear] = useState(null);

  const handleInputChange = (e) => {
    setYear(e.target.value);
  };

  const checkLeapYear = () => {
    const yearNumber = parseInt(year);
    if ((yearNumber % 4 === 0 && yearNumber % 100 !== 0) || yearNumber % 400 === 0) {
      setIsLeapYear(true);
    } else {
      setIsLeapYear(false);
    }
  };

  return (
    <div>
      <h1>Leap Year Checker</h1>
      <input
        type="number"
        value={year}
        onChange={handleInputChange}
        placeholder="Enter a year"
      />
      <button onClick={checkLeapYear}>Check</button>
      {isLeapYear !== null && (
        <div>
          {isLeapYear ? (
            <p>{year} is a leap year.</p>
          ) : (
            <p>{year} is not a leap year.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default seven;
