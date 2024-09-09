import React, { useState } from "react";

const Todo = ({ text, todos, setTodos, todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const editHandler = () => {
    setIsEditing(true);
  };

  const saveEditHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            text: editText,
          };
        }
        return item;
      })
    );
    setIsEditing(false);
  };

  return (
    <div className="todo">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
      )}
      {isEditing ? (
        <button onClick={saveEditHandler} className="save-btn">
          <i className="fas fa-save"></i>
        </button>
      ) : (
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
      )}
      {isEditing ? null : (
        <button onClick={editHandler} className="edit-btn">
          <i className="fas fa-edit"></i>
        </button>
      )}
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
