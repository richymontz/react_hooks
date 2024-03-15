import { useState } from "react"
import { useForm } from "../hooks"

export const TodoAddForm = ({ onNewTodo }) => {
  const { description, onInputChange, resetForm } = useForm({
    description: ''
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(), // temporal id :D
      description: description,
      done: false
    }

    onNewTodo(newTodo)
    resetForm();

  }

  return (
    <>
      <h4>Add Task</h4>
      <hr />
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="What we can do next?"
            name="description"
            onChange={onInputChange}
            value={description}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success mt-1"
        >
          Add
        </button>
      </form>
    </>
  )
}
