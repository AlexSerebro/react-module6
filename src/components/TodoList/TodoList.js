import React from "react";
import "./TodoList.css";
import { Todo } from "../Todo/Todo";
import classNames from "classnames";

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={classNames("item", { "item--compleated": completed })}
        >
          <Todo text={text} completed={completed} onToggleCompleted={() => onToggleCompleted(id)} onDeleteTodo={ ()=>onDeleteTodo(id)}/>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
