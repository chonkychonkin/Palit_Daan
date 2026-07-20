import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Cart.css';

export default function Cart() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(items);
    }, []);

    const updateQuantity = (id, change) => {
        const updated = cartItems.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + change;
                return { ...item, quantity: newQty > 0 ? newQty : 1 };
            }
            return item;
        });
        setCartItems(updated);
        localStorage.setItem('cart', JSON.stringify(updated));
    };

    const removeItem = (id) => {
        const updated = cartItems.filter(item => item.id !== id);
        setCartItems(updated);
        localStorage.setItem('cart', JSON.stringify(updated));
    };

    const calculateTotal = () => {
        return cartItems.reduce((runningTotal, item) => runningTotal + (item.food.price * item.quantity), 0);
    };

    const handlePlaceOrder = () => {
        if (cartItems.length === 0) return;

        // Get sequential order counter
        const nextOrderNumber = parseInt(localStorage.getItem('order_counter') || '0', 10) + 1;
        localStorage.setItem('order_counter', nextOrderNumber.toString());

        // Create new order package
        const newOrder = {
            id: '#' + nextOrderNumber.toString().padStart(4, '0'),
            date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            customer: 'Matthew Pasaol',
            paymentMethod: 'Cash on Delivery',
            items: cartItems,
            total: calculateTotal(),
            status: 'Pending Payment'
        };

        // Save to pending_orders
        const pendingOrders = JSON.parse(localStorage.getItem('pending_orders') || '[]');
        pendingOrders.unshift(newOrder); // Add to top of list
        localStorage.setItem('pending_orders', JSON.stringify(pendingOrders));

        // Save the latest order so the confirmation page can display it
        localStorage.setItem('latest_order', JSON.stringify(newOrder));

        // Clear cart
        localStorage.removeItem('cart');
        setCartItems([]);

        // Go to the confirmation page
        navigate('/confirmation');
    };

    return (
        <div className="cart-page-container">
            <h1 className="cart-title">Your Shopping Cart 🛒</h1>

            {cartItems.length === 0 ? (
                <div className="empty-cart-state">
                    <p>Your cart is empty. Let's get some delicious food!</p>
                    <button className="back-menu-btn" onClick={() => navigate('/menu')}>
                        Go to Menu 🍔
                    </button>
                </div>
            ) : (
                <div className="cart-layout">
                    {/* Items List */}
                    <div className="cart-items-list">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item-card">
                                <img src={item.food.image} alt={item.food.name} className="cart-item-img" />
                                <div className="cart-item-details">
                                    <h3>{item.food.name}</h3>
                                    <p className="cart-item-desc">{item.food.description}</p>
                                    
                                    {item.allergens.length > 0 && (
                                        <div className="cart-item-allergens">
                                            <strong>Allergens:</strong> {item.allergens.join(', ')}
                                        </div>
                                    )}
                                    
                                    {item.comment && (
                                        <div className="cart-item-comment">
                                            <strong>Notes:</strong> "{item.comment}"
                                        </div>
                                    )}

                                    <div className="cart-item-controls">
                                        <span className="cart-item-price">₱{item.food.price.toFixed(2)}</span>
                                        <div className="qty-controls">
                                            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                        </div>
                                        <button className="remove-item-btn" onClick={() => removeItem(item.id)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary Sidebar */}
                    <div className="cart-summary-sidebar">
                        <div className="summary-card">
                            <h2>Summary</h2>
                            <div className="summary-row">
                                <span>Items Subtotal:</span>
                                <span>₱{calculateTotal().toFixed(2)}</span>
                            </div>
                            <div className="summary-row total-row">
                                <span>Total:</span>
                                <span>₱{calculateTotal().toFixed(2)}</span>
                            </div>
                            <button className="place-order-submit-btn" onClick={handlePlaceOrder}>
                                Place Order (₱{calculateTotal().toFixed(2)})
                            </button>
                            <button className="continue-shopping-btn" onClick={() => navigate('/menu')}>
                                Add More Items
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
