import './flowerButtons.css'
import PLANTS from '../data'
import { useState } from 'react'
import { FlowerContext } from './FlowerContext'


export default function FlowerButtons({ children }) {
    const [cart, setCart] = useState([])
    const flowerMap = PLANTS.reduce((combine, flower) => {
        combine[flower.id] = flower
        return combine
    },{})
    const flowerButtonClick = (flower) => {
        setCart(cart => [...cart, flower])
        console.log(cart)
    }

  return (
    <div  className="plants">
        {Object.values(flowerMap).map(flower => (
            <div className="items" key={flower.id}>
                <h3>{flower.name}</h3>
                <p className='flower'>{flower.image}</p>
                <br />
                <button onClick={() => flowerButtonClick(flower)}>Add To Cart</button>
            </div>
        ))}
        {/* for some reason when I add {children my items on my webpage is not displaying} */}
        <FlowerContext.Provider value={{flowerButtonClick}}></FlowerContext.Provider>  
    </div>
  );
}
