import { Routes, Route, Navigate } from 'react-router-dom';
import SpecialInstructions from './SpecialInstructions';
import ProfileSettings from './ProfileSettings';
import MenuPage from './MenuPage';
 
export default function MainContent() {
    return (
        <div style={{
            backgroundColor: '#ffffff',
            flex: 1,
            minHeight: 'calc(100vh - 74px)',
            boxSizing: 'border-box'
        }}>
            <Routes>
                {}
                <Route path='/' element={<Navigate to='/orders' replace />} />
                <Route path='/orders' element={<SpecialInstructions />} />
                <Route path='/menu' element={<MenuPage />} />
                <Route path='/profile' element={<ProfileSettings />} />
                <Route path='/dashboard' element={<div style={{ padding: '20px' }}><h2>Dashboard Page</h2><p>Dashboard information will appear here.</p></div>} />
                <Route path='/pendingorders' element={<div style={{ padding: '20px' }}><h2>Pending Orders</h2><p>Pending orders will appear here.</p></div>} />
                <Route path='/orderhistory' element={<div style={{ padding: '20px' }}><h2>Order History</h2><p>Order history details will appear here.</p></div>} />
                <Route path='/profilesettings' element={<ProfileSettings />} />
                <Route path='/logout' element={<div style={{ padding: '20px' }}><h2>Logged Out</h2><p>You have been successfully logged out.</p></div>} />
            </Routes>
        </div>
    );
}