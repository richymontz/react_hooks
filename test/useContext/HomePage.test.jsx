import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/useContext/HomePage"
import { UserContext } from "../../src/useContext/context/UserContext";

describe('<HomePage />', () => {
  const user = {
    id: 1,
    name: 'Ricardo Montes'
  }

  test('should show the component without user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  })

  test('should show the component within user', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    const preTagInnerHTML = JSON.parse(preTag.innerHTML)

    expect(preTagInnerHTML.id).toBe(user.id);
    expect(preTagInnerHTML.name).toBe(user.name);
  })

})
