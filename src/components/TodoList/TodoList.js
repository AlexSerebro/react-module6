import React from "react";
import "./TodoList.css";

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text }) => (
        <li key={id} className="item">
          <p className="Todo--text">{text}</p>
          <button className="Todo--button" onClick={() => onDeleteTodo(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
