import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CounterContext } from '../../Context/CounterContect'
import { TonkenContext } from '../../Context/TokenContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  let {counter}=useContext(CounterContext)
  let {token,setToken}=useContext(TonkenContext)
   let navigate = useNavigate();

  function LogOut() {
    localStorage.removeItem("UserToken")
    setToken(null)
    navigate("/login")
  }
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-white mb-4" >
            <div className="container">
                <a className="navbar-brand" href="#">Shopping</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                  {token ? <>
                    <li className="nav-item">
                    <NavLink className="nav-link " to={'/home'} >Home</NavLink>
                    </li>
                    {/* <li className="nav-item">
                    <NavLink className="nav-link" to={'/about'}>About</NavLink>
                    </li> */}

                    <li className="nav-item">
                    <NavLink className="nav-link" to={'/contect'} > 
                    <FontAwesomeIcon icon={faShoppingCart}  />  
                     <span className='p-2 '>{counter}</span></NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink className="nav-link" to={'/category'}>category</NavLink>
                    </li>

                    <li className="nav-item"  onClick={LogOut}>
                    <p className="nav-link">Logout</p>
                    </li>

                    {/* <li className="nav-item">
                    <NavLink className="nav-link" to={'/setting'}>Setting</NavLink>
                    </li> */}

                  </> :<>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={'/register'}>Register</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to={'/login'}>Login</NavLink>
                    </li>

                  </>}
                 
             
                  
                </ul>
               
                </div>
            </div>
    </nav>

    </div>
  )
}

export default NavBar
