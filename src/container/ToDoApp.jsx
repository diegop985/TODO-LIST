import React, { useState, useEffect } from 'react';
import './todoapp.css'
import { InputTodo } from '../components/InputTodo/InputTodo';
import { ShowTodo } from '../components/ShowToDo/ShowTodo';




export const ToDoApp = () => {

  const [todoValue, setTodoValue] = useState([])
  return (



    <div>
    
        <h1>ToDoApp - 1</h1>
        <div className='todo-container'>
          <InputTodo setTodoValue={setTodoValue}/>
          <ShowTodo className="todo-form" todoValue={todoValue} setTodoValue={setTodoValue}/>
        </div>


    </div>

  )
}
