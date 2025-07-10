import React from 'react'
import { useState } from 'react';
import TaskInput from './Components/TaskInput'
import TaskList from './Components/TaskList'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  return (
    
    <div className="p-4 max-w-xl mx-auto">
      <TaskInput onAdd={addTask} />
      <TaskList tasks ={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
    
  )
}

export default App