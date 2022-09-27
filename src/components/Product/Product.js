import React from "react";
import "./Product.css";

const Product = (props) => {
  //console.log(props.product);
  const { handleAddToCart, product } = props;
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="product-container">
      <img src={img} alt="" />
      <div className="product-info">
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>Rating: {ratings} stars</p>
        <p>Manufracturer: {seller}</p>
      </div>
      <button
        onClick={() => {
          handleAddToCart(product);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
