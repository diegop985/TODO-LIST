import React, { useState, useEffect } from 'react';



export const DeleteInput = ({index, setTodoValue}) => {

    
    const borrarElemento = () => {
        
        setTodoValue(todoValue => [todoValue.splice(index,1), ...todoValue] )

    }

    return (

        <button onClick={borrarElemento}> Borrar </button>

    )
}
