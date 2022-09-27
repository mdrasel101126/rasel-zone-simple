import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let totalItems = 0;
  let totolPrice = 0;
  let shipping = 0;
  let tax = 0;
  let grandTotal = 0;
  for (const product of cart) {
    totalItems = totalItems + product.quantity;
    totolPrice = totolPrice + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  tax = parseFloat((totolPrice * 0.1).toFixed(2));
  grandTotal = totolPrice + tax + shipping;

  return (
    <div className="cart">
      <h3>Products Cart</h3>
      <h4>Selected Items: {totalItems}</h4>
      <p>Total: ${totolPrice}</p>
      <p>Shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <p>Grand Total: ${grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
