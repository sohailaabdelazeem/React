import {React,useState ,useEffect} from 'react'
import { Link ,Outlet } from 'react-router-dom'
import style from './Category.module.css'
export default function Category() {
    function cssClass(...classes) {
        console.log(classes);
        return classes.join("")
        
   }
    
  return (
 
   <>
  
          
       
            <ul className={cssClass(style.listCat)} >
                
                <li>
                    <Link to={'/category'} className='btn btn-primary m-4'>electronics</Link>
                </li>

                <li>
                    <Link to={'jewelery'} className='btn btn-primary m-4'>jewelery</Link>
                </li>

                <li>
                    <Link to={'men'} className='btn btn-primary m-4'>men's clothing</Link>
                </li>

                <li>
                    <Link to={'women'} className='btn btn-primary m-4'>women's clothing</Link>
                </li>
            </ul>
          
        <div>
            <Outlet/>

        </div>
        
       
       </>
  )
}
