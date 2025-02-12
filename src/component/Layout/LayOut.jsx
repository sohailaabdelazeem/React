import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

const LayOut = () => {
  return (
    <div>
        <NavBar/>
      <div className="container">
      <Outlet/>
      </div>
    </div>
  )
}

export default LayOut
