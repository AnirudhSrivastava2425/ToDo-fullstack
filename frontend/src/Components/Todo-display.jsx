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

  const [done,setDone] = useState([])
  useEffect(()=>{
    getDone();
  },[]);
  const getDone = async ()=>{
    let result = await fetch('http://localhost:5000/display');
    result = await result.json();
    setDone(result);
  }


  const deleteTodo = async (id)=>{
    let result = await fetch(`http://localhost:5000/deleteData/${id}`,{
      method: 'DELETE'
    });
    if (result) {
      getTodo();
      getDone();
    }
  }

  const updateTodo = async (id,status)=>{
    console.log(!status);
    let result = await fetch(`http://localhost:5000/update/${id}`,{
      method: 'PUT',
      body: JSON.stringify({
        Status:!status
      }),
      headers: { 'content-type': 'application/json'}
    });
    if(result){
      getTodo();
      getDone();
    }
  }

  return (
    <div className='all-todos'>
        <div className="todos" id='does'>
          {
            todo.map((item,index) => 
              <div className="cards-todo">
                <h2 className='titles'>{item.Title}</h2>
                <p className='desc'>{item.Description}</p>
                <div>
                <button className='btn btn-outline-primary' onClick={()=>updateTodo(item._id,item.Status)}>Mark As Done</button>
                <button className='btn btn-outline-danger' onClick={()=>deleteTodo(item._id)}>Delete</button>
                </div>
              </div>
            )
          }
        </div>
        <div className="todos" id='done'>
        {
            done.map((item,index) => 
              <div className="cards-todo">
                <h2 className='titles'>{item.Title}</h2>
                <p className='desc'>{item.Description}</p>
                <div>
                <button className='btn btn-outline-primary' onClick={()=>updateTodo(item._id,item.Status)} >Mark As Undone</button>
                <button className='btn btn-outline-danger' onClick={()=>deleteTodo(item._id)}>Delete</button>
                </div>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Todo