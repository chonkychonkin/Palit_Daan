import React, { useState, useEffect } from 'react';
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
        const targetOrder = pending.find(o => o.id === orderId);

        if (targetOrder) {
            // Update status to Paid
            targetOrder.status = 'Paid & Preparing';
            
            // Save updated pending list
            const updatedPending = pending.map(o => o.id === orderId ? targetOrder : o);
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
            <h1 className="po-title">Active & Pending Orders</h1>

            {orders.length === 0 ? (
                <div className="po-empty-state">
                    <p>No active orders at the moment. Hungry?</p>
                    <button className="po-order-btn" onClick={() => navigate('/menu')}>
                        Order Now
                    </button>
                </div>
            ) : (
                <div className="po-list">
                    {orders.map((order) => (
                        <div key={order.id} className="po-card">
                            <div className="po-card-header">
                                <div>
                                    <span className="po-order-id">{order.id}</span>
                                    <span className="po-order-date">{order.date}</span>
                                </div>
                                <span className={`po-status-badge ${order.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {order.status}
                                </span>
                            </div>

                            <div className="po-items-section">
                                {order.items.map((item, idx) => (
                                    <div key={idx} className="po-item-row">
                                        <div className="po-item-left">
                                            <span className="po-item-qty">{item.quantity}x</span>
                                            <span className="po-item-name">{item.food.name}</span>
                                            {item.allergens.length > 0 && (
                                                <span className="po-item-allergens">({item.allergens.join(', ')})</span>
                                            )}
                                        </div>
                                        <span className="po-item-price">₱{(item.food.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>

                            {order.items.some(item => item.comment) && (
                                <div className="po-notes-section">
                                    <strong>Special Instructions:</strong>
                                    <ul>
                                        {order.items.filter(item => item.comment).map((item, idx) => (
                                            <li key={idx}>
                                                <em>{item.food.name}:</em> "{item.comment}"
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="po-card-footer">
                                <div className="po-total">
                                    <span>Total Amount:</span>
                                    <span className="po-total-amount">₱{order.total.toFixed(2)}</span>
                                </div>
                                
                                {order.status === 'Pending Payment' && (
                                    <button className="po-pay-btn" onClick={() => simulatePayment(order.id)}>
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
