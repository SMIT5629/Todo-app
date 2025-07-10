import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks =[], onDelete, onToggle}) {
    return (
        <div>
        {tasks.map((task,index) => (
            <TaskItem
                key={task.id}
                task={task}
                index={index}
                onDelete={onDelete}
                onToggle={onToggle}
            />
        ))}
        </div>
    )
}

export default TaskList