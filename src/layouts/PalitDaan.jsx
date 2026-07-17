import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MainContent from '../layouts/MainContent';
import RegisterPage from '../pages/RegisterPage';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../pages/Signup';
import Login from '../pages/Login';

export default function PalitDaan() {   
    return (
        // <BrowserRouter>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                backgroundColor: '#ffa07a' 
            }}>
                
                    {/* <RegisterPage> */}
                        {/* <Login> */}
                        <Navbar />
                        <div style={{ display: 'flex', flex: 1 }}>
                        <Sidebar />
                        <MainContent />
                    </div>
                        {/* </Login> */}
                    {/* </RegisterPage> */}
            </div>
        // </BrowserRouter>
    );
}