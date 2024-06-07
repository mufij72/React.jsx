import React from 'react';

const Nine = () => {
  // Define the students array
  const students = [
    {
      id: 1,
      name: 'John Doe',
      age: 20,
      major: 'Computer Science'
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 22,
      major: 'Mathematics'
    },
    {
      id: 3,
      name: 'Emily Johnson',
      age: 21,
      major: 'Physics'
    }
  ];

  // Render the students' information
  return (
    <div>
      <h1>Students Information</h1>
      {students.map(student => (
        <div key={student.id} style={{ marginBottom: '20px' }}>
          <h2>{student.name}</h2>
          <p>Age: {student.age}</p>
          <p>Major: {student.major}</p>
        </div>
      ))}
    </div>
  );
};

export default Nine;
