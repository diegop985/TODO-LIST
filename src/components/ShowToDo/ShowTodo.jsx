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
                        <li key={element}>
                            {element}
                            <DeleteInput index = {index} setTodoValue={setTodoValue}/> 
                        </li>
                    )
                })
            }
        </ul>
    </div>

    )
}
