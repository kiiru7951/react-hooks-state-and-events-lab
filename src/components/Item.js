import React, { useState } from "react";

function Item({ name, category }) {
  const [addedToCart, setAddToCart] = useState (false)
  const cart = addedToCart ? "in-cart" : ""
  function addToCart(){
    setAddToCart(!addedToCart)
  }

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
