import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from'./Home.module.css'
import ProductItems from '../ProductItems/ProductItems';
import Loader from '../loader/Loader';
import { Helmet } from 'react-helmet';
 

const Home = () => {
  const [products,setProduct]=useState([])
  
  
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;  


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


    const totalPages = Math.ceil(products.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
   const displayedProducts = products.slice(startIndex, startIndex + itemsPerPage);
 

  return (
    <div className="container">

      <div className="row my-5">
        <Helmet>
          <title>Home</title>
        </Helmet>
        {products.length === 0 ? (
          <Loader />
        ) : (
          displayedProducts.map((product) => <ProductItems key={product.id} product={product} />)
        )}
      </div>

    
      <div className="d-flex justify-content-center my-4">
        <button 
          className="btn btn-primary mx-2" 
          disabled={currentPage === 0} 
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        
        <span className="mx-3">Page {currentPage + 1} of {totalPages}</span>

        <button 
          className="btn btn-primary mx-2" 
          disabled={currentPage + 1 === totalPages} 
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home
