import s from './Todo.module.css'

export const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => {
  return (
    <div className={s.listItem}>
      <input
        type="checkbox"
        className={s.checkbox}
        checked={completed}
        onChange={onToggleCompleted}
      ></input>
      <p className={s.Todo__text}>{text}</p>
      <button className={s.Todo__button} onClick={onDeleteTodo}>
        Delete
      </button>
    </div>
  )
};