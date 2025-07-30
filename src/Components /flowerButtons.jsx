import './FlowerButtons.css';
import PLANTS from '../data'


export default function FlowerButtons() {
    const flowerMap = PLANTS.reduce((combine, PLANTS) => {
        combine[PLANTS.id] = PLANTS
        return combine;
    }, {});
  
    return (
        <div>
          {Object.values(flowerMap).map(flower => (
            <div key={flower.id}>
                <h3>{flower.name}</h3>
                <p className='flower'>{flower.image}</p> 
                <br />
                <button>Add To Cart</button>
        </div>
  ))}
  </div>
 );
}