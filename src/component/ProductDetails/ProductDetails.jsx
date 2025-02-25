import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'
import style from './ProductDetails.module.css'
import { Helmet } from 'react-helmet'

export default function ProductDetails() {

  function cssClass(...classes){
    console.log(classes);
    return classes.join(" ")
    
}

    let {id}=useParams()
    // console.log(id);
   const[details,setDetails]=useState(null)
   async function getProduct() {
     let {data}= await axios.get(`https://fakestoreapi.com/products/${id}`)
     console.log(data);
     setDetails(data)
    }
    useEffect(()=>{
        getProduct()
    },[])
    
  return (
    <div className='row my-5'>
       
        <Helmet>
        <title>{details?.title}</title>
        </Helmet>
        {details ? <>  <div className="col-md-4">
                <img src={details.image} alt={details.title} className='w-100' />
        </div>

        <div className="col-md-8">
            <h1>{details.title}</h1>
            <p className='text-dark'>{details.description}</p>
            <span>{details.category}</span>
             <div className="d-flex justify-content-between align-items-center">
                <p >{details.price} </p>
                <p>{details.rating.rate}</p>
            </div>
            </div></> :<Loader/>}
      
    </div>
  )
}
