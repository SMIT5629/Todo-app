import React from 'react'

function TaskItem({ task,index, onDelete, onToggle}) {
    return (
        <div className="flex items-center justify-between mb-2 bg-gray-100 p-2 rounded">
        <span
            className={task.completed ? 'task done' : 'task'}>
            {index + 1}.  <span/>{task.text} 
        </span>
        <button onClick={() => onToggle(task.id)}
        className={`px-2 py-1 rounded text-white ${task.completed ? 'bg-green-500' : 'bg-blue-500'} 
            hover:opacity-80`}
        >{task.completed ? 'Undo' : 'Done'}
        </button>
        <button
            onClick={() => onDelete(task.id)}
            className="ml-2 text-red-500 hover:text-red-700"
        >
            Delete
        </button>
        </div>
    )
    }

export default TaskItem