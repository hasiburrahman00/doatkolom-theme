import './../lib/lazysizes';
import { Routes, Route } from 'react-router-dom';
import { AdminContextProvider } from './context';

import ReactTemplateMount from '../config';
import Home from './pages/home';
import Gallery from './pages/gallery';
import Developer from './pages/developer';
import SuccessStory from './pages/success-story';

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
        Component: SuccessStory
    },
    {
        name: 'Developer Option',
        path: '/developer',
        Component: Developer
    }
]

ReactTemplateMount(()=>{
    return (
        <AdminContextProvider menu={menu}>
            <Routes>
                { menu.map( Item => <Route key={Item.name} path={Item.path} element={<Item.Component/>}/> ) }
            </Routes>
        </AdminContextProvider>
    )
}, 'doatkolom-admin-root')