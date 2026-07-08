import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

    // Check if the current route is active
    const isActive = (path) => {
        if (path === '/orders') {
            return location.pathname === '/orders' || location.pathname === '/';
        }
        return location.pathname === path;
    };

    const linkStyle = (path) => ({
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '6px 16px',
        border: isActive(path) ? '2px solid white' : '2px solid transparent',
        borderRadius: '4px',
        transition: 'all 0.2s ease',
    });

    return (
        <div style={{
            backgroundColor: '#f5821f',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 40px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            zIndex: 10
        }}>
            <div style={{
                color: 'white',
                fontSize: '28px',
                fontWeight: '800',
                letterSpacing: '1px',
                cursor: 'pointer'
            }}>
                PALIT DAAN
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
            }}>
                <Link to='/' style={linkStyle('/')}>Home</Link>
                <Link to='/menu' style={linkStyle('/menu')}>Menu</Link>
                <Link to='/orders' style={linkStyle('/orders')}>Orders</Link>
                <Link to='/profile' style={linkStyle('/profile')}>Profile</Link>
            </div>
        </div>
    );
}