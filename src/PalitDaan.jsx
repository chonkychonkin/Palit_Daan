import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainContent from './MainContent';
import RegisterPage from './RegisterPage';
import { BrowserRouter } from 'react-router-dom';
 
export default function PalitDaan() {
    return (
        <BrowserRouter>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                backgroundColor: '#ffa07a'
            }}>
                <RegisterPage>
                <Navbar />
                <div style={{ display: 'flex', flex: 1 }}>
                    <Sidebar />
                    <MainContent />
                </div>
                </RegisterPage>
            </div>
        </BrowserRouter>
    );
}