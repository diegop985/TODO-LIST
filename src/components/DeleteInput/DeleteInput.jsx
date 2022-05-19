import React, { useState, useEffect } from 'react';
import './deleteinput.css'


export const DeleteInput = ({index, todoValue, setTodoValue}) => {

    
    const borrarElemento = () => {
        setTodoValue(todoValue.filter(item => item !== index))

    }

    return (

        <button onClick={borrarElemento}> Borrar </button>

    )
}
