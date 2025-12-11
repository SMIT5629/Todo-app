import React from 'react';

function TaskItem({ task, index, onDelete, onEdit ,onToggle}) {

  const handleEdit = () => {
  const newText = prompt("Edit task:", task.text);
  if (newText && newText.trim()) {
    onEdit(task.id, newText.trim());
  }
};


  return (
    <div className='task-item'>
      <span>{index + 1}. {task.text} {task.completed ? '✔️':''}</span>
      <button className="btn btn-edit" onClick={handleEdit}>Edit</button>
      <button className="btn btn-delete" onClick={()=> onDelete(task.id)}>Delete</button>
      <button className="btn btn-toggle" onClick ={()=> onToggle(task.id)}>{task.completed ?'UNDO':'DONE'}</button>
    </div>
  );
}

export default TaskItem;
