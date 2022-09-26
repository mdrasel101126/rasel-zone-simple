import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { img, name, price, seller, ratings } = props.product;
  return (
    <div className="product-container">
      <img src={img} alt="" />
      <div className="product-info">
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>Rating: {ratings} stars</p>
        <p>Manufracturer: {seller}</p>
      </div>
      <button>Add To Cart</button>
    </div>
  );
};

export default Product;
