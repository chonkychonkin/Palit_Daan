import './FoodCard.css';

function FoodCard({ name, price, onAddToCart }) {
  
  return (
    <div className='foodcard-grid'>
      <div className="food-card">
        <h3>{name}</h3>

        <p>₱{price.toFixed(2)}</p>

        <button onClick={onAddToCart}>
          Ibutang sa cart!?
        </button>
      </div>
    </div>
  );
}

export default FoodCard;