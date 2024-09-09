


import React from "react";

const Forms = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const buttonHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 1000) + 1,
      },
    ]);
    setInputText("");
  };

  const filterStatusHandler = (status) => {
    setStatus(status);
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={inputHandler}
        value={inputText}
        placeholder="New Task"
      />
      <button onClick={buttonHandler} className="todo-button" type="submit">
        ADD
      </button>
      <div className="filter-buttons">
        <button type="button" className="filter-btn" onClick={() => filterStatusHandler('all')}>All</button>
        <button type="button" className="filter-btn" onClick={() => filterStatusHandler('completed')}>Completed</button>
        <button type="button" className="filter-btn" onClick={() => filterStatusHandler('uncompleted')}>Uncompleted</button>
      </div>
    </form>
  );
};

export default Forms;


