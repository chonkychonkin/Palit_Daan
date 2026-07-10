import './FoodCard.css';

function FoodCard({ name, price, onAddToCart }) {
  
  return (
    <div className='foodcard-grid'>
      <div className="food-card">
        <h3>{name}</h3>
<<<<<<< Updated upstream

        <p>₱{price.toFixed(2)}</p>

        <button onClick={onAddToCart}>
          Ibutang sa cart!?
        </button>
=======
        <p className="food-description">{description}</p>special-instructions
        <div className="food-price-row">
          <p className="price">₱{price.toFixed(2)}</p>
          <button className="add-cart-btn" onClick={onAddToCart}>
            Ibutang sa cart
          </button>
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default FoodCard;