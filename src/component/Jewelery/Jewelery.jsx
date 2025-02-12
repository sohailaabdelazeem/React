import {React,useState ,useEffect} from 'react'
import ProductItems from '../ProductItems/ProductItems';
import Loader from '../loader/Loader';
import axios from 'axios'

export default function Jewelery() {
  const [products,setProduct]=useState()
  async function getProduct() {
    await axios.get(`https://fakestoreapi.com/products/category/jewelery`)
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

 
