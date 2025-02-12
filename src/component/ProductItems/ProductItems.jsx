import React from 'react'
import style from './ProductItem.module.css'
export default function ProductItems({product}) {
  function cssClass(...classes){
        console.log(classes);
        return classes.join(" ")
        
  }
  // className="col-md-4"  className={cssClass(style.parent, 'col-md-4', 'my-4', 'h-100')}
  return (
      <div key={product.id}  className={cssClass(style.parent,'col-md-4','my-4','h-100')}>
                  <div className="card h-100 w-100" >
                   <div className={cssClass(style.image)}>
                      <img
                          src={product.image}
                          className="card-img-top"
                          alt={product.title}
                          style={{ height: "300px" }}
                        />
                   </div>
                    <div className="card-body">
                      <h5 className="card-text">{product.title}</h5>
                      <p className="card-text">
                        {product.description.split(" ").splice(0, 7).join(" ")+"....."}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className={cssClass(style.price)}> <span className={cssClass(style.con)}>$</span>{product.price} </p>
                        <p className={cssClass(style.rate)}>{product.rating.rate}</p>
                      </div>
                     
                    </div>
                  </div>
                </div>
  )
}
