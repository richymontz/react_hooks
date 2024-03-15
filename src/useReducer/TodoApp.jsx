import { TodoList } from "./TodoList";
import { TodoAddForm } from "./TodoAddForm";
import { useTodo } from "./useTodo";

export const TodoApp = () => {

  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, pendingTodos, todosCount } = useTodo();

  return (
    <>
      <h1>TODOAPP ({todosCount}) - <small>pendings: {pendingTodos} </small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <TodoAddForm onNewTodo={handleNewTodo} />
        </div>
      </div>

    </>
  )
}
