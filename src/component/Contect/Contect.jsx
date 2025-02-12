import React, { useEffect } from 'react'
import axios from 'axios'

const Contect = () => {
 async function Welcom() {
    let {data}=await axios.get(`http://localhost:3000/`)
    console.log(data);
    
  }
  useEffect(()=>{
    Welcom()
  },[])
  return (
      <>
      
      </>
  )
}

export default Contect