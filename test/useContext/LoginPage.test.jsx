import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/useContext/LoginPage"
import { UserContext } from "../../src/useContext/context/UserContext"

describe('<LoginPage />', () => {
  const setUserMock = jest.fn();

  beforeEach(() => {
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    )
  })

  test('should shoe the component without user', () => {
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  })

  test('should call setUser', () => {
    const mockUser = { id: 123123, name: 'Richy Montz', email: 'rick@example.com' }

    const button = screen.getByRole('button', { name: 'Set User' })
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith(mockUser)
  })
})
