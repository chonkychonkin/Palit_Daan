import FoodCard from "../components/FoodCard";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import '../css/MenuPage.css';
import mangoGrahamImg from '../assets/mangograham.jpg';

function MenuPage() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, []);

  const foods = [
    {
      id: 1,
      name: "Classic Cheeseburger",
      price: 85,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60",
      description: "Juicy beef patty with melted cheese, fresh lettuce, and tomatoes.",
    },
    {
      id: 2,
      name: "Spicy Fried Chicken",
      price: 110,
      image: "https://www.cubesnjuliennes.com/wp-content/uploads/2018/12/Spicy-Chicken-Fry-Recipe.jpg",
      description: "Crispy and spicy golden fried chicken served with rice.",
    },
    {
      id: 3,
      name: "Mango Graham Shake",
      price: 65,
      image: mangoGrahamImg,
      description: "Sweet and refreshing mango shake topped with crushed graham.",
    },
    {
      id: 4,
      name: "Pork Sisig Combo",
      price: 130,
      image: "https://images.summitmedia-digital.com/spotph/images/2020/05/29/5-1590750776.jpg",
      description: "Sizzling pork sisig with a sunny side up egg and garlic rice.",
    },
    {
      id: 5,
      name: "Spaghetti Bolognese",  
      price: 95,
      image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?auto=format&fit=crop&w=500&q=60",
      description: "Classic Italian pasta with a rich and meaty tomato sauce.",
    },
    {
      id: 6,
      name: "Halo-Halo Special",
      price: 80,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=60",
      description: "Traditional Filipino crushed ice dessert loaded with sweet treats.",
    },
    {
      id: 7,
      name: "Pork BBQ Ribs",
      price: 75,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=60",
      description: "Tender, slow-cooked pork ribs glazed with a sweet and smoky BBQ sauce.",
    },
    {
      id: 8,
      name: "Buko Pandan Salad",
      price: 55,
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=500&q=60",
      description: "Creamy dessert made of pandan-flavored gelatins and shredded young coconut.",
    }
  ];

  const handleAddToCart = (food) => {
    navigate('/special-instructions', { state: { food } });
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
          <button className="cart-btn" onClick={() => navigate('/cart')} aria-label="View cart">
            🛒 {cartCount > 0 ? `(${cartCount})` : ''}
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