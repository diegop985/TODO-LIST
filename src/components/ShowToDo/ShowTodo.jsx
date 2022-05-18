import React, { useState, useEffect } from 'react';
import './showtodo.css'


export const ShowTodo = ({ todoValue }) => {


    console.log(todoValue)

    return (

    <div>
        <ul>
            {
                todoValue.map(element => <li key={element}>{element}</li>)
            }
        </ul>
    </div>

    )
}
