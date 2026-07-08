import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainContent from './MainContent';
import { BrowserRouter } from 'react-router-dom';

export default function PalitDaan() {
    return (
        <div style={{display:'flex'}}>
            {/* <BrowserRouter> */}
                <Navbar/>
                <Sidebar/>
                <MainContent/>
            {/* </BrowserRouter> */}
        </div>
    )
}