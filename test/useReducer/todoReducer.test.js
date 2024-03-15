import { todoReducer } from "../../src/useReducer/todoReducer"

describe('todoReducer', () => {

  const initialState = [{
    id: 1,
    description: 'demo todo',
    done: false
  }]

  test('should returns initial state', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState)
  })

  test('should adds todo', () => {
    const action = {
      type: 'Add Todo',
      payload: {
        id: 2,
        description: 'new todo',
        done: false
      }
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload)
  })

  test('should deletes a todo', () => {
    const action = {
      type: 'Delete Todo',
      payload: 1
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  })

  test('should deletes a todo', () => {
    const action = {
      type: 'Toggle Todo',
      payload: 1
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(1);
    expect(newState[0].done).toBeTruthy();
  })
})
