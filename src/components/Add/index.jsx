import React from "react";

function Add({ setInput, todos, input, setTodos }) {
  const handleAdd = () =>{
    setTodos([
        ...todos, {
        title:input,
        id: Math.random()
    }])
    setInput("")
  }
    return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Add;
