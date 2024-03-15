import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('<MainApp />', () => {
  test('should show HomePAge', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    )

    expect(screen.getByText('Home Page')).toBeTruthy();
  })

  test('should show LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/Login']}>
        <MainApp />
      </MemoryRouter>
    )

    expect(screen.getByText('Login Page')).toBeTruthy();
  })

})
