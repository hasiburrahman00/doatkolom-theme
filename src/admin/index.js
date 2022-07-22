import './../lib/lazysizes';
import ReactTemplateMount from '../config';

import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminContextProvider } from './context';
import Navbar from './components/Navbar';

const Home = React.lazy(() => import('./pages/home')) 

const menu = [
    {
        name: 'Home',
        path: '/',
        Component: Home
    },
    {
        name: 'Photo Gallery',
        path: '/gallery',
        Component: React.lazy(() => import('./pages/gallery'))
    },
    {
        name: 'Success Story',
        path: '/success',
        Component: React.lazy(() => import('./pages/gallery'))
    },
    {
        name: 'Developer Option',
        path: '/developer',
        Component: React.lazy(() => import('./pages/developer'))
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
                            <Home/>
                        </Suspense>
                    } /> ) }
                </Routes>
            </main>
        </AdminContextProvider>
    )
}, 'doatkolom-admin-root')