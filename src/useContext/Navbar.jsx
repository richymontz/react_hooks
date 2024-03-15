import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3 border border-secondary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-light"> useContext </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>

              <li className="nav-item">
                <NavLink to="/Login" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}> Login </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}> About </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}


