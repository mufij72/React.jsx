import React from 'react';

const Task = ({ task, onStatusChange }) => {
  return (
    <div>
      <input 
        type="checkbox" 
        checked={task.done} 
        onChange={() => onStatusChange(task.id)} 
      />
      {task.name}
    </div>
  );
};

export default Task;
