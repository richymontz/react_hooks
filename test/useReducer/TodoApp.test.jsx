import { render, screen } from '@testing-library/react'
import { TodoApp } from '../../src/useReducer/TodoApp.jsx'
import { useTodo } from '../../src/useReducer/useTodo'

jest.mock('../../src/useReducer/useTodo')

describe('<TodoApp />', () => {
  useTodo.mockReturnValue({
    todos: [
      {
        id: 1,
        description: 'something todo 1',
        done: false
      },
      {
        id: 2,
        description: 'something todo 2',
        done: true
      },
    ],
    pendingTodos: 1,
    todosCount: 2,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  })

  test('should show correctly the componnent', () => {
    render(<TodoApp />);

    expect(screen.getByText('something todo 1')).toBeTruthy();
    expect(screen.getByText('something todo 2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();

  })

})
