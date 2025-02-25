import React, { useContext ,useState } from 'react'
import style from './ProductItem.module.css'
import { CounterContext } from '../../Context/CounterContect';
import { Link } from 'react-router-dom';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../redux/counterSlice';


export default function ProductItems({product}) {
 
  // let {count,setCounter}=useContext(CounterContext)

  let {count} =useSelector((store)=>store.counter)
  let dispatch=useDispatch()


  function cssClass(...classes){
        console.log(classes);
        return classes.join(" ")
        
  }
    
    const handleAddToCart = () => {
      // setCounter(count + 1);
       dispatch(increase(count))
  
       let cart = JSON.parse(localStorage.getItem("cart"));
  
       let existingProduct = cart.find((item) => item.id === product.id);
  
      if (existingProduct) {
        existingProduct.quantity += 1; 
      } else {
        cart.push({ ...product, quantity: 1 });
      }
  
       localStorage.setItem("cart", JSON.stringify(cart));
  
       toast.success(`${product.title} added to cart!`, {
        position: "top-right",
        autoClose: 2000,  
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    };
  
 
    return (
      <div key={product.id}  className={cssClass(style.parent,'col-md-3','my-4','h-50')}>
        <div className='shadow-sm'>
        <Link  to={`/product-details/${product.id}`} className="card h-100  d-block text-decoration-none" >

        <div className={cssClass(style.image)}>
                      <img
                          src={product.image}
                          className="card-img-top"
                          alt={product.title}
                           
                        />
                   </div>

        </Link>
        <div className="card-body d-flex flex-column p-3">
                       <h5 className="card-text">{product?.title ? product.title.split(' ').splice(0, 3).join(' ') : product.title}</h5>

                       <p className="card-text">
                        {/* {product.description.split(" ").splice(0, 7).join(" ")+"....."} */}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className={cssClass(style.price,'text-muted')}> <span className={cssClass(style.con)}>$</span>{product.price} </p>
                        <p className={cssClass(style.rate)}>{product.rating.rate}</p>
                      </div>
                     
                     <button className='btn btn-success' onClick={handleAddToCart}>Add toCard</button>
                    

            </div>
        </div>
               
         </div>
  )
}
