import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from'./Home.module.css'
import ProductItems from '../ProductItems/ProductItems';
import Loader from '../loader/Loader';

const Home = () => {
  const [products,setProduct]=useState()
  
  async function getProduct() {
    await axios.get(`https://fakestoreapi.com/products`)
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
        <div className="row">
            
        {products && products.length == 0 ? 
        <Loader/>
         : 
          products?.map(product => <ProductItems product={product}/>)
        }

       

    
         </div>
    </div>
  )
}

export default Home
