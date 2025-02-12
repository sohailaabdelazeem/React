import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Setting() {
  return (
   <>
       <div className="row">
        <div className="col-6">
            <ul>
                
                <li>
                    <Link to={'/setting'}>electronics</Link>
                </li>

                <li>
                    <Link to={'jewelery'}>jewelery</Link>
                </li>

                <li>
                    <Link to={'men'}>men's clothing</Link>
                </li>

                <li>
                    <Link to={'women'}>women's clothing</Link>
                </li>
            </ul>
        </div>
        <div className="col-6">
            <Outlet/>
        </div>
       </div>
   </>
  )
}
