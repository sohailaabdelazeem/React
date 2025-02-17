import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from'./Home.module.css'
import ProductItems from '../ProductItems/ProductItems';
import Loader from '../loader/Loader';
// import ReactPaginate from "react-paginate";


const Home = () => {
  const [products,setProduct]=useState([])
  
  // Pag
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Show 5 products per page


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


   // Calculate total pages
   const totalPages = Math.ceil(products.length / itemsPerPage);

   // Get products for the current page
   const startIndex = currentPage * itemsPerPage;
   const displayedProducts = products.slice(startIndex, startIndex + itemsPerPage);
 

  return (
    <div className="container">
      <div className="row my-5">
        {products.length === 0 ? (
          <Loader />
        ) : (
          displayedProducts.map((product) => <ProductItems key={product.id} product={product} />)
        )}
      </div>

      {/* Pagination Controls */}
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
