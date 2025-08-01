import "./FlowerButtons.css";
import PLANTS from "../data";
import { useState } from "react";
import { FlowerContext } from "./FlowerContext.js";

export default function FlowerButtons({ children }) {
  const [cart, setCart] = useState([]);

  const flowerMap = PLANTS.reduce((combine, PLANTS) => {
    combine[PLANTS.id] = PLANTS;
    return combine;
  }, {});
  const flowerButtonClick = (flower) => {
    setCart((cart) => [...cart, flower]);
    console.log(cart);
  };

  return (
    <div className="plants">
      {Object.values(flowerMap).map((flower) => (
        <div className="items" key={flower.id}>
          <h3>{flower.name}</h3>
          <p className="flower">{flower.image}</p>
          <br />
          <button onClick={() => flowerButtonClick(flower)}>Add To Cart</button>
        </div>
      ))}
      <FlowerContext.Provider value={flowerButtonClick}>
        {children}
      </FlowerContext.Provider>
    </div>
  );
}
