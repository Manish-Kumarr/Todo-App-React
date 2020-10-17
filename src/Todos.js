import React, { Fragment } from "react";
import "./App.css";

const todos = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  return (
    <Fragment>
      <div className="todos">
        <p className={todo.completed ? "completed" : ""}>{text}</p>
        <button onClick={completeHandler}>
          <i class="fa fa-check"></i>
        </button>
        <button onClick={deleteHandler}>
          <i class="fa fa-remove"></i>
        </button>
      </div>
    </Fragment>
  );
};

export default todos;
