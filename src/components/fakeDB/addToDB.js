const addToDB = (id) => {
  const savaCart = getCartFromDB();
  if (id in savaCart) {
    savaCart[id] = savaCart[id] + 1;
  } else {
    savaCart[id] = 1;
  }
  localStorage.setItem("cart", JSON.stringify(savaCart));
};
const getCartFromDB = () => {
  const cart = {};
  const saveCart = localStorage.getItem("cart");
  if (saveCart) {
    return JSON.parse(saveCart);
  }
  return cart;
};

export { addToDB, getCartFromDB };
