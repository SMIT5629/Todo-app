//simple and shorter version of TodoList with up and down functionality instead of three separate components for input and list
import { useState } from 'react'

function TodoList() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }])
            setNewTask('')
        }
    }
    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index))
    }
    const toggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        )
        setTasks(updatedTasks)
    }
    const uptask = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    }
    const downtask = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask();
    };
    return (
        <div>
            <h2>Todo List</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Add new task'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)} />
                <button onClick={addTask}>Add</button>
            </form>
            <div>
                <ol>
                    {tasks.map((task, index) =>
                        <li className='task-list' key={index}>
                            <span className='task'>{task.text}</span>
                            <span>{task.completed ? "✅" : ""}</span>
                            <button className="btn btn-delete" onClick={() => deleteTask(index)}>Delete</button>
                            <button className="btn btn-up" onClick={() => uptask(index)}>👆</button>
                            <button className="btn btn-down" onClick={() => downtask(index)}>👇</button>
                            <button className="btn btn-toggle" onClick={() => toggleTask(index)}>
                                {task.completed ? 'Undo' : 'Done'}
                            </button>

                        </li>
                    )}
                </ol>
            </div>

        </div>
    )
}

export default TodoList