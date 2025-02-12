// import React from 'react'
import {React,useState ,useEffect} from 'react'
import ProductItems from '../ProductItems/ProductItems';
import Loader from '../loader/Loader';
import axios from 'axios'

export default function Electronics() {
  const [products,setProduct]=useState()
  async function getProduct() {
    await axios.get(`https://fakestoreapi.com/products/category/electronics`)
    .then(({data})=>{
      console.log(data);
      setProduct(data)
    }).catch(error=>{console.log(error)})
  }
  useEffect(()=>{
    getProduct()
  },[])

  return (
    <div>

         <div>
             <div className="row">
                 
             {products && products.length == 0 ? 
             <Loader/>
              : 
               products?.map(product => <ProductItems product={product}/>)
             }
     
            
     
         
              </div>
         </div>
    </div>
  )
}
