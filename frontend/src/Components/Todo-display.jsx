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
  console.log(todo);
  return (
    <div className='all-todos'>
        <div className="todos" id='does'>
          {
            todo.map((item,index) => 
              <div className="cards-todo">
                <h2 className='titles'>{item.Title}</h2>
                <p className='desc'>{item.Description}</p>
                <div>
                <button className='btn btn-outline-primary'>Mark As Done</button>
                <button className='btn btn-outline-danger'>Delete</button>
                </div>
              </div>
            )
          }
        </div>
        <div className="todos" id='done'>done</div>
    </div>
  )
}

export default Todo