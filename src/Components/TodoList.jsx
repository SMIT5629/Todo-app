//simple and shorter version of TodoList with up and down functionality instead of three separate components for input and list
import { useState,useEffect } from 'react'

function TodoList() {
    const [tasks, setTasks] = useState(()=>{
        const storedTasks = localStorage.getItem("tasks")
        return storedTasks ? JSON.parse(storedTasks) :[];
    })
    const [newTask, setNewTask] = useState('')

    const [form, setForm] = useState({
        title: "",
        task: ""
    });

    const addTask = () => {
        if (form.task.trim() !== '' && form.title.trim() !== "") {
            setTasks([...tasks, { title: form.title, task: form.task, completed: false }])
            setForm({ title: "", task: "" });

        }
    }

    useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
    
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
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const removeAll = (index) => {
       setTasks(tasks.filter((task)=>task.completed==false))
    }

    return (
        <div className='todo-container'>
            <h2>Todo List</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name='title'
                    placeholder='Title'
                    value={form.title}
                    onChange={handleChange} />
                <input type="text"
                    name='task'
                    placeholder='Add new task'
                    value={form.task}
                    onChange={handleChange} />
                <button type='submit'>Add</button>
            </form>
            <div>
                <ol>
                    <p>{tasks.length == 0 ? 'No Tasks addes' : ''}</p>
                    {tasks.map((task, index) =>
                        <li className={`task-list ${task.completed ? "completed" : ""}`} key={index}>
                            <span className='title'>{task.title}</span>
                            <span className='task'>{task.task}</span>
                            <span>{task.completed ? "✅" : ""}</span>
                            <button className="btn btn-delete" onClick={() => deleteTask(index)}>Delete</button>
                            <button className="btn btn-up" onClick={() => uptask(index)}>👆</button>
                            <button className="btn btn-down" onClick={() => downtask(index)}>👇</button>
                            <button className="btn btn-toggle" onClick={() => toggleTask(index)}>
                                {task.completed ? 'Undo' : 'Done'}
                            </button>

                        </li>
                    )}
                    <button className='btn' onClick={removeAll}>remove all</button>
                </ol>
            </div>

        </div>
    )
}

export default TodoList