import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div style={{
                backgroundColor: 'pink', 
                width: '20%',
                padding: '20px',
            }}>
                <h3>Navbar</h3>
                <p><Link to='/menu'>Menu</Link></p>
                <p><Link to='/orders'>Orders</Link></p>
                <p><Link to='/profile'>Profile</Link></p>
        </div>
    )
}