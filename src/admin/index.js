import './../lib/lazysizes';
import '../web-components';
import { Routes, Route } from 'react-router-dom';
import { AdminContextProvider } from './context';
import { SnackbarProvider } from 'notistack'

import ReactTemplateMount from '../config';
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
        name: 'Developer Option',
        path: '/developer',
        Component: Developer
    }
]

const snackbarPosition = {
    vertical: 'bottom',
    horizontal: 'right',
}

ReactTemplateMount(()=>{
    return (
        <SnackbarProvider maxSnack={10} anchorOrigin={snackbarPosition}>
            <AdminContextProvider menu={menu}>
                <Routes>
                    { menu.map( Item => <Route key={Item.name} path={Item.path} element={<Item.Component/>}/> ) }
                </Routes>
            </AdminContextProvider>
        </SnackbarProvider>
    )
}, 'doatkolom-admin-root')