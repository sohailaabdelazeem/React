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
      <div>Category</div>
 
          
       
            <ul className={cssClass(style.listCat)} >
                
                <li>
                    <Link to={'/category'}>electronics</Link>
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
          
        <div>
            <Outlet/>

        </div>
        
       
       </>
  )
}
