import TodoList from './components/TodoList'
import './App.css'

function App() {
  return (
    <div>
      <TodoList />
    </div>
  )
}

export default App

// import React, { useState } from 'react';
// import TaskInput from './components/TaskInput';
// import Tasklist from './components/Tasklist';
// import './App.css';

// function App() {

//   const [tasks, setTasks] = useState([]);

//   const addTask = (taskText) => {
//   const newTask = {
//     id: Date.now(),  
//     text: taskText,
//     completed: false
//   };
//   setTasks([...tasks, newTask]);
// };


//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   const editTask = (id, newText) => {
//   const updated = tasks.map(task =>
//     task.id === id ? { ...task, text: newText } : task
//   );
//   setTasks(updated);
// };

//   const toggleTask = (id) => {
//     const updated = tasks.map((task ) =>
//       task.id === id ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(updated);
//   }
  

//   return (
//     <div className='app-container'>
//       <h1>To-Do App</h1>
//       <TaskInput onadd={addTask} />
//       <Tasklist tasks={tasks} deleteTask={deleteTask} editTask={editTask} toggleTask={toggleTask}/>
//     </div>
//   );
// }

// export default App;
