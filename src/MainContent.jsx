import { Routes, Route } from 'react-router-dom';

export default function MainContent() {
    return (
        <div style={{
            backgroundColor: 'skyblue',
            width: '80%',
            minHeight: '100vh',
            padding: '20px',
            }}>
                <h3>MainContent</h3>
                <Routes>
                    <Route path='/menu' element={<p>menu</p>}/>
                    <Route path='/orders' element={<p>orders</p>}/>
                    <Route path='/profile' element={<p>profile</p>}/>
                    <Route path='/dashboard' element={<p>dashboard</p>}/>
                    <Route path='/pendingorders' element={<p>pendingorders</p>}/>
                    <Route path='/orderhistory' element={<p>orderhistory</p>}/>
                    <Route path='/profilesettings' element={<p>profilesettings</p>}/>
                    <Route path='/logout' element={<p>logout</p>}/>
                </Routes>
        </div>
    )
}