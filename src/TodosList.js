import React from "react";
import Todos from "./Todos";

const todosList = ({ todos, setTodos, filter }) => {
  return (
    <div>
      {filter.map((todo) => (
        <Todos
          id={todo.id}
          text={todo.text}
          com={todo.completed}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default todosList;
