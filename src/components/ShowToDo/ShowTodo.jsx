import React, { useState, useEffect } from 'react';
import { DeleteInput } from '../DeleteInput/DeleteInput';
import './showtodo.css'


export const ShowTodo = ({ todoValue, setTodoValue }) => {
    
    return (

    <div>
        <ul>
            {
                todoValue.map((element, index)=>  {
                    return (
                        <li key={index}>
                            <p>{element}</p>
                            <DeleteInput index = {element} 
                            setTodoValue={setTodoValue} 
                            todoValue={todoValue}/>
                        </li>
                    )
                })
            }
        </ul>
    </div>

    )
}
