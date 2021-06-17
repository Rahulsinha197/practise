import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Todo from "./component/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const addTodo = (event) => {
    event.preventDefault(); //stops refresh
    console.log("Im Working");
    setTodos([...todos, input]);
    setInput(""); //clear the input after hitting submit
  };

  const deleteTodo = (val) => {
    console.log(val);
    const index = todos.indexOf(val);
    const todoCpy = [...todos];
    if (index > -1) {
      todoCpy.splice(index, 1);
      setTodos(todoCpy);
    }
  };

  const updateList = (value, i) => {
    console.log(value, i);
    const newTodos = [...todos];
    newTodos[i] = value;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <FormControl>
        <InputLabel> Write a Todo</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </FormControl>
      <Button
        disabled={!input}
        type="submit"
        onClick={addTodo}
        variant="contained"
        color="secondary"
      >
        Add Todo
      </Button>
      <ul>
        {todos.map((todo, i) => (
          <Todo
            key={i}
            text={todo}
            deleteTodo={deleteTodo}
            updateList={updateList}
            index={i}
          />
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
