export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

  const stroke = (todo.done) ? 'text-decoration-line-through' : '';

  return (
    <>
      <li
        className="list-group-item d-flex justify-content-between"
      >
        <span
          className={`align-self-center ${stroke}`}
          onClick={() => onToggleTodo(todo.id)}
          aria-label='span'
        >
          {todo.description}
        </span>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => { onDeleteTodo(todo.id) }}
        >
          Delete
        </button>
      </li>
    </>
  )
}
