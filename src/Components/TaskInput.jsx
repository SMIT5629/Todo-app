import React from 'react'
import { useState } from 'react';

function TaskInput({ onAdd }) {

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
        onAdd(input);
        setInput('');
    }
};
    return (
    <form onSubmit={handleSubmit} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
        <input
            type="text"
            className="flex-1 px-3 py-2 border rounded-l"
            placeholder="Enter a task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
        <button
            type="submit"
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
            Add Task
        </button>
    </form>
  )
}

export default TaskInput