import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./Form";
import TodosList from "./TodosList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [value, changeValue] = useState("all");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveTodos();
  }, [todos, value]);

  const filterHandler = () => {
    switch (value) {
      case "completed":
        setFilter(todos.filter((el) => el.completed !== false));
        break;
      case "uncompleted":
        setFilter(todos.filter((el) => el.completed !== true));
        break;
      default:
        setFilter(todos);
        break;
    }
  };

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem("todos"));
      console.log(local);
      setTodos(local);
    }
  };

  return (
    <div className="App">
      <h1 className="heading">Singh's Todo List</h1>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        changeValue={changeValue}
      />
      <TodosList setTodos={setTodos} todos={todos} filter={filter} />
    </div>
  );
};

export default App;
