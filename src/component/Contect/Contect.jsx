import React, { useContext, useEffect ,useState } from 'react'
import axios from 'axios'
import Electronics from '../Electronics/Electronics';
// import { CounterContext } from '../../Context/CounterContect';
// import { useParams } from 'react-router-dom'

const Contect = () => {
  const [cart, setCart] = useState([]); // State to store cart data
  useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  setCart(storedCart);
}, []);
  
  function renoveProduct(id) {
      console.log("remove" ,id)
     const updatedCart = cart.filter((item) => item.id !== id);
    
     localStorage.setItem("cart", JSON.stringify(updatedCart));

     setCart(updatedCart);
  }
  return (
    
    <>
    <h2>My Cart</h2>

    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.image}
                  alt={item.title}
                  width="50"
                  height="50"
                />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button className="btn btn-danger" onClick={()=>renoveProduct(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </>
);
  
}

export default Contect