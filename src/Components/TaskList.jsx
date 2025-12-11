import React from 'react';
import TaskItem from './TaskItem';

function Tasklist({ tasks = [], deleteTask, editTask ,toggleTask}) {
    return (
        <div className='task-list'>
            {tasks.map((task, index) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    index={index}
                    onDelete={deleteTask}
                    onEdit={editTask}
                    onToggle ={toggleTask}
                />
            ))}
        </div>
    );
}

export default Tasklist;
