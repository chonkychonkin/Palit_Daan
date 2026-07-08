import { Link } from 'react-router-dom';


export default function Sidebar() {
    return (
        <div style={{
                backgroundColor: 'pink', 
                width: '20%',
                padding: '20px',
            }}>
                <h3>Sidebar</h3>
                <p><Link to='/dashboard'>Dashboard</Link></p>
                <p><Link to='/pendingorders'>pendingorders</Link></p>
                <p><Link to='/orderhistory'>orderhistory</Link></p>
                <p><Link to='/profilesettings'>profilesettings</Link></p>
                <p><Link to='/logout'>logout</Link></p>
        </div>
    )
}