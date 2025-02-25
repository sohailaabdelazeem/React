import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/cartSlice';
import Loader from '../loader/Loader';
import ProductItem from '../productItem/productItem';


const About = () => {
   let dispatch=useDispatch()
 
   let {products,isloading} = useSelector((store)=>store.products)
 
   useEffect(()=>{
    console.log("heloo");
    
      dispatch(getProducts())
   },[])
  return (
 
    <div className="row my-5">
      {isloading ? (
        <Loader />
      ) : products?.length > 0 ? (
        products.map((product) => (
          product && <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  )
}

export default About
