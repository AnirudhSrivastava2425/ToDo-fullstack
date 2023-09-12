import React, { useEffect, useState } from 'react'

function Todo() {

  const [todo,setTodo]=useState([])
  useEffect(()=>{
    getTodo();
  },[])
  const getTodo = async ()=>{
    let result = await fetch('http://localhost:5000/showData');
    result = await result.json();
    setTodo(result);
  }
  return (
    <div className='all-todos'>
        <div className="todos" id='does'>
          
        </div>
        <div className="todos" id='done'>done</div>
    </div>
  )
}

export default Todo