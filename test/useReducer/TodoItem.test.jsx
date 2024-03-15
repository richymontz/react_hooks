import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/useReducer/TodoItem";

describe('<TodoItem>', () => {

  const todo = {
    id: 1,
    description: 'something todo',
    done: false
  }

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('should show pending Todo', () => {
    render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

    const liElement = screen.getByRole('listitem');
    const spanElement = screen.getByLabelText('span');

    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
    expect(spanElement.className).not.toContain('text-decoration-line-through')
  })

  test('should show completed Todo', () => {
    todo.done = true
    render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('text-decoration-line-through')
  })

  test('should call toggole todo', () => {
    render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  })

  test('should call delete todo', () => {
    render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

    const deleteButtton = screen.getByRole('button', { name: 'Delete' });
    fireEvent.click(deleteButtton);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  })


})
