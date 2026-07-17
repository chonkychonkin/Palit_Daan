import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../css/SpecialInstructions.css';

export default function SpecialInstructions() {
    const location = useLocation();

    var food = { name: 'Hotdog', price: 30 };
    if (location.state && location.state.food) {
        food = location.state.food;
    }

    const [comment, setComment] = useState('');
    const [nuts, setNuts] = useState(false);
    const [dairy, setDairy] = useState(false);
    const [eggs, setEggs] = useState(false);
    const [others, setOthers] = useState(false);

    function handleCommentChange(e) {
        setComment(e.target.value);
    }

    function handleNutsClick() {
        setNuts(!nuts);
    }

    function handleDairyClick() {
        setDairy(!dairy);
    }

    function handleEggsClick() {
        setEggs(!eggs);
    }

    function handleOthersClick() {
        setOthers(!others);
    }

    function handleConfirmOrder() {
        // puhon nani
    }

    var nutsClass = 'si-allergen-btn';
    if (nuts === true) {
        nutsClass = 'si-allergen-btn selected';
    }

    var dairyClass = 'si-allergen-btn';
    if (dairy === true) {
        dairyClass = 'si-allergen-btn selected';
    }

    var eggsClass = 'si-allergen-btn';
    if (eggs === true) {
        eggsClass = 'si-allergen-btn selected';
    }

    var othersClass = 'si-allergen-btn';
    if (others === true) {
        othersClass = 'si-allergen-btn selected';
    }

    return (
        <div className="si-container">
            {/* Left Column: Input Form */}
            <div className="si-left">
                <h1 className="si-title">Special Instructions</h1>
                <p className="si-subtitle">
                    Add comments or allergen notes before confirming your order
                </p>

                <h3 className="si-section-title">Comments / Special Requests</h3>
                <textarea
                    rows="6"
                    className="si-textarea"
                    placeholder="e.g. Less rice, extra sauce, no onions..."
                    value={comment}
                    onChange={handleCommentChange}
                />

                <h3 className="si-section-title-spaced">Allergen Concerns</h3>
                <p className="si-hint">Select all that apply:</p>

                <div className="si-allergen-group">
                    <button onClick={handleNutsClick} className={nutsClass}>
                        {nuts === true ? (
                            <span className="si-allergen-icon selected">✓</span>
                        ) : (
                            <span className="si-allergen-icon">●</span>
                        )}
                        Nuts
                    </button>

                    <button onClick={handleDairyClick} className={dairyClass}>
                        {dairy === true ? (
                            <span className="si-allergen-icon selected">✓</span>
                        ) : (
                            <span className="si-allergen-icon">●</span>
                        )}
                        Dairy
                    </button>

                    <button onClick={handleEggsClick} className={eggsClass}>
                        {eggs === true ? (
                            <span className="si-allergen-icon selected">✓</span>
                        ) : (
                            <span className="si-allergen-icon">●</span>
                        )}
                        Eggs
                    </button>

                    <button onClick={handleOthersClick} className={othersClass}>
                        {others === true ? (
                            <span className="si-allergen-icon selected">✓</span>
                        ) : (
                            <span className="si-allergen-icon">●</span>
                        )}
                        Others
                    </button>
                </div>
            </div>

            {/* Right Column: Order Summary Panel */}
            <div className="si-right">
                <div className="si-summary-card">
                    <div>
                        <h2 className="si-summary-heading">Order Summary</h2>

                        <div className="si-summary-item">
                            <div className="si-summary-item-row">
                                <span className="si-summary-item-name">{food.name}</span>
                                <span className="si-summary-item-price">₱{food.price.toFixed(2)}</span>
                            </div>
                            <div className="si-summary-item-qty">x1</div>
                        </div>
                    </div>

                    <div>
                        <div className="si-total-row">
                            <span className="si-total-label">TOTAL:</span>
                            <span className="si-total-price">₱{food.price.toFixed(2)}</span>
                        </div>

                        <button onClick={handleConfirmOrder} className="si-confirm-btn">
                            Confirm Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}