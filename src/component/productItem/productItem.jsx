import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Price: ${product.price}</p>
          <p className="card-text">Quantity: {product.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;