import React, { useState } from 'react';
import Chex2 from './Chex2'

const Chex = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', done: false },
    { id: 2, name: 'Task 2', done: false },
    { id: 3, name: 'Task 3', done: false }
  ]);

  const handleStatusChange = (taskId) => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map(task => (
        <Chex2 key={task.id} task={task} onStatusChange={handleStatusChange} />
      ))}
    </div>
  );
};

export default Chex;
