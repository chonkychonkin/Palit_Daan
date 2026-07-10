import './FoodCard.css';

function FoodCard({ name, price, image, description, onAddToCart }) {
  return (
    <div className="food-card">
      <div className="food-image" aria-label={`${name} illustration`}>
        {image}
      </div>

      <div className="food-info">
        <h3>{name}</h3>
        <p className="food-description">{description}</p>
        <div className="food-price-row">
          <p className="price">₱{price.toFixed(2)}</p>
          <button className="add-cart-btn" onClick={onAddToCart}>
            Ibutang sa cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;