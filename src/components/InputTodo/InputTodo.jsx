import React, { useState, useEffect } from 'react';
import './inputodo.css'

export const InputTodo = ({setTodoValue}) => {

    const [queryValue, setQueryValue] = useState("")

    const querySubmit = (e) => { 
        setQueryValue(e.target.value)
        
    }

    const handleSubmitChange = (e) => {
        e.preventDefault()

        if( queryValue.trim().length > 1 ) {
            setTodoValue( todoValue => [queryValue, ...todoValue])
            setQueryValue("")

        }

        
    }




    return (
        <>
            <form onSubmit={handleSubmitChange}>
                <label htmlFor="todo-input">Type your TODO's</label><br></br>
                <input 
                    id='todo-input' 
                    onChange={querySubmit}
                    type="text"
                    value={queryValue}
                />
            </form>
        </>
    )
}