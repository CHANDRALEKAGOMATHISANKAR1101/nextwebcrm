import React, { useState, useEffect } from 'react';
 
const Tasks = () => {
  const [tasks, setTasks] = useState([]);
 
  useEffect(() => {
    // Simulating fetching tasks from backend
    const fetchedTasks = [
      { id: 1, title: 'Task 1', status: 'Pending' },
      { id: 2, title: 'Task 2', status: 'Completed' },
    ];
    setTasks(fetchedTasks);
  }, []);
 
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h2 className="font-bold">{task.title}</h2>
            <p>Status: {task.status}</p>
          </li>
        ))} 
      </ul>
    </div>
  );
};
 
export default Tasks;