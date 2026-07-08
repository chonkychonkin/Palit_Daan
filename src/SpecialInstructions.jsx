import { useState } from 'react';

export default function SpecialInstructions() {
    const [comment, setComment] = useState('');
    const [nuts, setNuts] = useState(true);
    const [dairy, setDairy] = useState(true);
    const [eggs, setEggs] = useState(false);
    const [others, setOthers] = useState(false);

    const getAllergenButtonStyle = (isSelected) => ({
        backgroundColor: isSelected ? '#ffa366' : '#ececec  ',
        color: isSelected ? '#ffffff' : '#555555',
        border: 'none',
        borderRadius: '12px',
        padding: '12px 24px',
        fontWeight: 'bold',
        fontSize: '15px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'all 0.2s ease',
        boxShadow: isSelected ? '0 4px 6px rgba(255,163,102,0.25)' : 'none'
    });

    const allergenLabel = (isSelected, text) => (
        <>
            <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: isSelected ? '#ffffff' : '#b0b0b0',
                color: isSelected ? '#ffa366' : '#ffffff',
                fontSize: '11px',
                fontWeight: 'bold'
            }}>
                {isSelected ? '✓' : '●'}
            </span>
            {text}
        </>
    );

    const handleConfirmOrder = () => {
        alert(JSON.stringify({
            comment,
            allergens: { nuts, dairy, eggs, others },
            item: "Hotdog",
            total: "₱30.00"
        }, null, 2));
    };

    return (
        <div style={{
            display: 'flex',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
            flexWrap: 'wrap'
        }}>
            {}
            <div style={{
                flex: '2 1 600px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h1 style={{
                    fontSize: '42px',
                    fontWeight: '800',
                    color: '#111111',
                    margin: '0 0 8px 0'
                }}>
                    Special Instructions
                </h1>
                <p style={{
                    fontSize: '16px',
                    color: '#666666',
                    margin: '0 0 35px 0'
                }}>
                    Add comments or allergen notes before confirming your order
                </p>

                <h3 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#222222',
                    margin: '0 0 15px 0'
                }}>
                    Comments / Special Requests
                </h3>
                <textarea
                    rows="6"
                    style={{
                        width: '100%',
                        backgroundColor: '#f2f2f2',
                        border: '2px solid transparent',
                        borderRadius: '12px',
                        padding: '18px',
                        fontSize: '16px',
                        resize: 'none',
                        outline: 'none',
                        color: '#333333',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s ease, background-color 0.2s ease',
                    }}
                    placeholder="e.g. Less rice, extra sauce, no onions..."
                    value={comment}
                    onChange={(e)=> setComment(e.target.value)}
                    onFocus={(e) => {
                        e.target.style.borderColor = '#ffa366';
                        e.target.style.backgroundColor = '#ffffff';
                    }}
                    onBlur={(e) => {
                        e.target.style.borderColor = 'transparent';
                        e.target.style.backgroundColor = '#f2f2f2';
                    }}
                />

                <h3 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#222222',
                    margin: '35px 0 5px 0'
                }}>
                    Allergen Concerns
                </h3>
                <p style={{
                    fontSize: '14px',
                    color: '#666666',
                    margin: '0 0 18px 0'
                }}>
                    Select all that apply:
                </p>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    maxWidth: '400px'
                }}>
                    <button 
                        onClick={()=> setNuts(!nuts)} 
                        style={getAllergenButtonStyle(nuts)}
                    >
                        {allergenLabel(nuts, 'Nuts')}
                    </button>

                    <button 
                        onClick={()=> setDairy(!dairy)} 
                        style={getAllergenButtonStyle(dairy)}
                    >
                        {allergenLabel(dairy, 'Dairy')}
                    </button>

                    <button 
                        onClick={()=> setEggs(!eggs)} 
                        style={getAllergenButtonStyle(eggs)}
                    >
                        {allergenLabel(eggs, 'Eggs')}
                    </button>

                    <button 
                        onClick={()=> setOthers(!others)} 
                        style={getAllergenButtonStyle(others)}
                    >
                        {allergenLabel(others, 'Others')}
                    </button>
                </div>
            </div>

            {}
            <div style={{
                flex: '1 1 320px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{
                    backgroundColor: '#f2f2f2',
                    borderRadius: '16px',
                    padding: '30px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '400px',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                }}>
                    <div>
                        <h2 style={{
                            fontSize: '24px',
                            fontWeight: '800',
                            color: '#111111',
                            margin: '0 0 10px 0',
                            paddingBottom: '12px',
                            borderBottom: '2px solid #222222'
                        }}>
                            Order Summary
                        </h2>

                        <div style={{
                            marginTop: '25px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <span style={{
                                    fontSize: '18px',
                                    fontWeight: '800',
                                    color: '#222222'
                                }}>
                                    Hotdog
                                </span>
                                <span style={{
                                    fontSize: '18px',
                                    fontWeight: '800',
                                    color: '#f5821f'
                                }}>
                                    ₱30.00
                                </span>
                            </div>
                            <div style={{
                                fontSize: '14px',
                                color: '#888888',
                                fontWeight: 'bold'
                            }}>
                                x1
                            </div>
                        </div>
                    </div>

                    <div>
                        <div style={{
                            borderTop: '1px solid #dddddd',
                            paddingTop: '20px',
                            marginBottom: '20px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <span style={{
                                fontSize: '18px',
                                fontWeight: '800',
                                color: '#111111'
                            }}>
                                TOTAL:
                            </span>
                            <span style={{
                                fontSize: '20px',
                                fontWeight: '800',
                                color: '#f5821f'
                            }}>
                                ₱30.00
                            </span>
                        </div>

                        <button
                            onClick={handleConfirmOrder}
                            style={{
                                width: '100%',
                                backgroundColor: '#f5821f',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '12px',
                                padding: '16px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 4px 10px rgba(245,130,31,0.35)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#e07216';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#f5821f';
                                e.currentTarget.style.transform = 'none';
                            }}
                        >
                            Confirm Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}