import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Go to sleep", "wake up", "awake"]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault(); //stops refresh
    console.log("Im Working");
    setTodos([...todos, input]);
    setInput(""); //clear the input after hitting submit
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <Button
        type="submit"
        onClick={addTodo}
        variant="contained"
        color="primary"
      >
        Add Todo
      </Button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
