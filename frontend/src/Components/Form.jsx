import React, { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addValues = async()=> {
    let result = await fetch("http://localhost:5000/addData", 
    {
      method: "post",
      body: JSON.stringify({
        Title:title,
        Description:description,
        Status:false
      }),
      headers: { "Content-Type": "application/json" },
    })
    result = await result.json()
    
  }
  
  return (
    <form className="task-adder">
      <input
        type='text'
        placeholder='Title'
        onChange={(e)=> setTitle(e.target.value)}
        required
      />
      <textarea
        name=''
        id=''
        cols='30'
        rows='10'
        onChange={(e)=> setDescription(e.target.value)}
        placeholder='Description'></textarea>
      <button className="btn btn-outline-dark ps-5 pe-5" onClick={addValues}>Add Task</button>
    </form>
  );
}

export default Form;
