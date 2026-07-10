import { useNavigate } from "react-router-dom";
import FoodCard from "./FoodCard";
import './MenuPage.css';

function MenuPage() {
  const navigate = useNavigate();
  const foods = [
    {
      id: 1,
      name: "Hotdog",
      price: 30,
    },
    {
      id: 2,
      name: "Pancake",
      price: 30,
    },
    {
      id: 3,
      name: "Tortang Talong",
      price: 30,
    }
  ];

  const handleAddToCart = (food) => {
    navigate('/special-instructions', { state: { food } });
  };

  return (
    <div className="menu-page">
      <div className="header1">
        <div className="title-container">
            <h1>Mga Pagkaon</h1>
            <h5>Tan-awa unsa imo ganahan paliton.</h5>
        </div>
        <div>
            <button className="cart-btn"> 🛒 </button>
        </div>

        
      </div>

      <div className="food-grid">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            name={food.name}
            image={food.image}
            price={food.price}
            onAddToCart={() => handleAddToCart(food)}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;