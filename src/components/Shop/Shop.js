import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { addToDB, getCartFromDB } from "../fakeDB/addToDB";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const saveCart = getCartFromDB();
    const newCart = [];
    for (let id in saveCart) {
      const product = products.find((product) => product.id === id);
      if (product) {
        product.quantity = saveCart[id];
        newCart.push(product);
      }
    }
    setCart(newCart);
  }, [products]);
  const handleAddToCart = (selectedProduct) => {
    //console.log(selectedProduct);
    let newCart = [];
    const existedProduct = cart.find(
      (product) => product.id === selectedProduct.id
    );
    const remainingProduct = cart.filter(
      (product) => product.id !== selectedProduct.id
    );
    if (existedProduct) {
      existedProduct.quantity = selectedProduct.quantity + 1;
      newCart = [...remainingProduct, selectedProduct];
    } else {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }

    setCart(newCart);
    addToDB(selectedProduct.id);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
