import React from "react";
import "./TodoList.css";
import classNames from "classnames";

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={classNames("item", { "item--compleated": completed })}
        >
          <input
            type="checkbox"
            className="checkbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          ></input>
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
