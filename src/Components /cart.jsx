import PLANTS from "../data";
import { useState } from "react";
// import { FlowerContext } from "./FlowerContext.js";

export default function Cart() {
  const [plusButtonClick, minusButtonClick] = useState([]);

  return (
    <>
      <div>
        {Object.values(PLANTS).map((item, flower) => (
          <div key={flower}>
            <p>{item.image}</p>
            <button onClick={() => plusButtonClick(flower)}>+</button>
            <button onClick={() => minusButtonClick(flower)}>-</button>
          
          </div>
        ))}
      </div>
    </>
  );
}
