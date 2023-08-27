import React, { useState } from "react";

function Form() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  function addValues() {
    console.log(Title, Description);
  }

  return (
    <div className="task-adder">
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
    </div>
  );
}

export default Form;
