import './../lib/lazysizes';
import ReactTemplateMount from '../config';

import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminContextProvider } from './context';
import Navbar from './components/Navbar';

// const Home = React.lazy(() => import('./pages/home')) 
import Home from './pages/home';
import Gallery from './pages/gallery';
import Developer from './pages/developer';

const menu = [
    {
        name: 'Home',
        path: '/',
        Component: Home
    },
    {
        name: 'Photo Gallery',
        path: '/gallery',
        Component: Gallery
    },
    {
        name: 'Success Story',
        path: '/success',
        Component: Developer
    },
    {
        name: 'Developer Option',
        path: '/developer',
        Component: Developer
    }
]

ReactTemplateMount(()=>{
    return (
        <AdminContextProvider>
            <Navbar/>
            <main className="mt-28">
                <Routes>
                    { menu.map( Item => <Route key={Item.name} path={Item.path} element={
                        <Suspense fallback={<h2>Loading</h2>}>
                            <Item.Component/>
                        </Suspense>
                    } /> ) }
                </Routes>
            </main>
        </AdminContextProvider>
    )
}, 'doatkolom-admin-root')