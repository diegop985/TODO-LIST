import React, { useState, useEffect } from 'react';
import { DeleteInput } from '../DeleteInput/DeleteInput';
import './showtodo.css'


export const ShowTodo = ({ todoValue, setTodoValue }) => {
    
    return (

    <div>
        <ul>
            {
                todoValue.map(element => <li key={element}>
                    {element}
                    <DeleteInput element = {element}/> 
                </li>)
            }
        </ul>
    </div>

    )
}
