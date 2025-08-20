import PLANTS from '../data'
import { useState } from 'react'
// import { FlowerContext } from './Components/FlowerContext'
import { useContext } from 'react'

export default function Cart({ flowerButtonClick}) {
    const [plusButtonCLick, minusButtonCLick] = useState([])
    const flowerArr = useContext(flowerButtonClick)
    console.log(flowerArr)

    

  return (
    <>
        <div>
            {Object.values(PLANTS).map((item, flower) => (
                <div key={flower}>
                    <p>{item.image}</p>
                    <button onClick={() => plusButtonCLick(flower)}>+</button>
                    <button onClick={() => minusButtonCLick(flower)}>-</button>
                </div>
            ))}  
        </div>
    </>
  )
}
