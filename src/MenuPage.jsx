import FoodCard from "./FoodCard";
import './MenuPage.css';

function MenuPage() {
  const foods = [
    {
      id: 1,
      name: "Hotdog",
      price: 30,
      image: "🌭",
      description: "Savory and grilled to perfection.",
    },
    {
      id: 2,
      name: "Pancake",
      price: 30,
      image: "🥞",
      description: "Soft, fluffy, and perfect for breakfast.",
    },
    {
      id: 3,
      name: "Tortang Talong",
      price: 30,
      image: "🍆",
      description: "A comforting local favorite with rich flavor.",
    }
  ];

  const handleAddToCart = (food) => {
    console.log(`${food.name} added to cart`);
  };

  return (
    <div className="menu-page">
      <div className="menu-shell">
        <div className="header1">
          <div className="title-container">
            <span className="menu-badge">Featured Picks</span>
            <h1>Mga Pagkaon</h1>
            <h5>Tan-awa unsa imo ganahan paliton.</h5>
          </div>
          <button className="cart-btn" aria-label="View cart">
            🛒
          </button>
        </div>

        <div className="food-grid">
          {foods.map((food) => (
            <FoodCard
              key={food.id}
              name={food.name}
              image={food.image}
              description={food.description}
              price={food.price}
              onAddToCart={() => handleAddToCart(food)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuPage;