import React, { useState } from "react";
import List from "../../components/List";
import Add from "../../components/Add";

function Home() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Add input={input} setInput={setInput} setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Home;
