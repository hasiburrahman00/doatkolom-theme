import { Routes, Route } from 'react-router-dom';
import { AdminContextProvider } from './context';

import ReactTemplateMount from '../config';
import Home from './pages/home';
import Gallery from './pages/gallery';
import Developer from './pages/developer';
import Navbar from './components/Navbar';

ReactTemplateMount(()=>{
    return (
        <AdminContextProvider>
            <Navbar/>
            <main className="mt-28">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/gallery" element={<Gallery/>} />
                    <Route path="/developer" element={<Developer/>} />
                </Routes>
            </main>
        </AdminContextProvider>
    )
}, 'doatkolom-admin-root')