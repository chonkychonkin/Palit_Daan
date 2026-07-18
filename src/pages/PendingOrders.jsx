import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/PendingOrders.css';

export default function PendingOrders() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const pending = JSON.parse(localStorage.getItem('pending_orders') || '[]');
        setOrders(pending);
    }, []);

    const simulatePayment = (orderId) => {
        // Diri gi move and mga order padung sa order_history
        const pending = JSON.parse(localStorage.getItem('pending_orders') || '[]');
        const targetOrder = pending.find(order => order.id === orderId);

        if (targetOrder) {
            // Update status to Paid
            targetOrder.status = 'Paid & Preparing';
            
            // Save updated pending list
            const updatedPending = pending.map(order => order.id === orderId ? targetOrder : order);
            setOrders(updatedPending);
            localStorage.setItem('pending_orders', JSON.stringify(updatedPending));

            // Optional: Move to order_history
            const history = JSON.parse(localStorage.getItem('order_history') || '[]');
            const historyOrder = { ...targetOrder, status: 'Completed', completedDate: new Date().toLocaleDateString() };
            history.unshift(historyOrder);
            localStorage.setItem('order_history', JSON.stringify(history));
        }
    };

    return (
        <div className="pending-orders-container">
            <h1 className="pending-title">Active & Pending Orders</h1>

            {orders.length === 0 ? (
                <div className="pending-empty-state">
                    <p>No active orders at the moment. Hungry?</p>
                    <button className="pending-order-btn" onClick={() => navigate('/menu')}>
                        Order Now
                    </button>
                </div>
            ) : (
                <div className="pending-list">
                    {orders.map((order) => (
                        <div key={order.id} className="pending-card">
                            <div className="pending-card-header">
                                <div>
                                    <span className="pending-order-id">{order.id}</span>
                                    <span className="pending-order-date">{order.date}</span>
                                </div>
                                <span className={`pending-status-badge ${order.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {order.status}
                                </span>
                            </div>

                            <div className="pending-items-section">
                                {order.items.map((item, index) => (
                                    <div key={index} className="pending-item-row">
                                        <div className="pending-item-left">
                                            <span className="pending-item-qty">{item.quantity}x</span>
                                            <span className="pending-item-name">{item.food.name}</span>
                                            {item.allergens.length > 0 && (
                                                <span className="pending-item-allergens">({item.allergens.join(', ')})</span>
                                            )}
                                        </div>
                                        <span className="pending-item-price">₱{(item.food.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>

                            {order.items.some(item => item.comment) && (
                                <div className="pending-notes-section">
                                    <strong>Special Instructions:</strong>
                                    <ul>
                                        {order.items.filter(item => item.comment).map((item, index) => (
                                            <li key={index}>
                                                <em>{item.food.name}:</em> "{item.comment}"
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="pending-card-footer">
                                <div className="pending-total">
                                    <span>Total Amount:</span>
                                    <span className="pending-total-amount">₱{order.total.toFixed(2)}</span>
                                </div>
                                
                                {order.status === 'Pending Payment' && (
                                    <button className="pending-pay-btn" onClick={() => simulatePayment(order.id)}>
                                        Simulate OTC Payment ₱
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
