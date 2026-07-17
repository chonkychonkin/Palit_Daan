import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar() {
    const location = useLocation();

    const isActive = (path) => {
        if (path === '/orders') {
            return location.pathname === '/orders' || location.pathname === '/';
        }
        return location.pathname === path;
    };

    return (
        <div className="navbar">
            <div className="navbar-brand">
                PALIT DAAN
            </div>
            <div className="navbar-links">
                <Link className={`navbar-link ${isActive('/menu') ? 'active' : ''}`} to="/menu">Menu</Link>
                <Link className={`navbar-link ${isActive('/orders') ? 'active' : ''}`} to="/orders">Orders</Link>
                <Link className={`navbar-link ${isActive('/profile') ? 'active' : ''}`} to="/profile">Profile</Link>
            </div>
        </div>
    );
}