import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link " to={'/home'} >Home</NavLink>
                    </li>
                    {/* <li className="nav-item">
                    <NavLink className="nav-link" to={'/about'}>About</NavLink>
                    </li> */}

                    {/* <li className="nav-item">
                    <NavLink className="nav-link" to={'/contect'}>Contect</NavLink>
                    </li> */}

                    <li className="nav-item">
                    <NavLink className="nav-link" to={'/category'}>category</NavLink>
                    </li>

                    {/* <li className="nav-item">
                    <NavLink className="nav-link" to={'/setting'}>Setting</NavLink>
                    </li> */}
                    <li className="nav-item">
                    <NavLink className="nav-link" to={'/register'}>Register</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to={'/login'}>Login</NavLink>
                    </li>
                  
                </ul>
               
                </div>
            </div>
    </nav>

    </div>
  )
}

export default NavBar
