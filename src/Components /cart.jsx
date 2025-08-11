import PLANTS from "../data";
import { useContext } from "react";
import { useState } from "react";
import { FlowerContext } from "./FlowerContext";
// import { FlowerContext } from "./FlowerContext.js";

export default function Cart({ flowerButtonClick }) {
  const [plusButtonClick, minusButtonClick] = useState([]);
  const { cart, flowerButtonClick } = useContext(FlowerContext);
  console.log(flowerButtonClick)
  console.log(cart)

  const plusButtonClick = (flower) => {
    setCart(cart => [...cart, flower]);
  }

  const minusButtonClick = (flower) => {
    setCart(cart => 
    {
      const index = cart.findIndex(item => item.id === flower.id); // remove all instances
      if (index !== -1) {
        return cart.filter((_, i) => i !== index);
      }
      return cart
    })
  }

  // add function called cart filter and map all items into IDs 

  return (
    <>
      <div>
        <h2>Shopping Cart </h2>
        {Object.values(PLANTS).map((item, flower) => (
          <div key={flower}>
            <p>{item.name}</p>
            <p> {item.image}</p>
            <p>{item.id}</p>
            <button onClick={() => plusButtonClick(cart)}>+</button>
            <button onClick={() => minusButtonClick(cart)}>-</button>
          
          </div>
        ))}
      </div>
    </>
  );
}
