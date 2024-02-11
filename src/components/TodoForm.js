import React, { useState } from 'react'

export const TodoForm = () => {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        console.log(value)
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input className='todo-input'
                type='text'
                placeholder='what is the task today?'
                onChange={(e) => setValue(e.target.value)} />
            <button className='todo-btn' type='submit'>Add task</button>
        </form>
    )
}
