import React, { useState, useEffect } from 'react';



export const DeleteInput = ({element}) => {

    let ele = element
    
    const borrarElemento = (elemento) => {
        console.log(ele)
    }


    return (

        <button onClick={borrarElemento}> Borrar </button>

    )
}
