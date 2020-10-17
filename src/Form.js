import React from "react";

const form = ({ inputText, setInputText, todos, setTodos, changeValue }) => {
  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: Math.random() * 500, text: inputText, completed: false },
    ]);
    setInputText("");
  };

  const optionHandler = (e) => {
    changeValue(e.target.value);
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <input
          onChange={inputChangeHandler}
          type="text"
          value={inputText}
          maxLength="22"
          required
        />
        <button type="submit">
          <i class="fa fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={optionHandler} name="todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default form;
