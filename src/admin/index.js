import ReactTemplateMount from '../config';
import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Home from './home';
import Gallery from './gallery';
import Navbar from './components/Navbar';

ReactTemplateMount(()=>{
    return (
        <Fragment>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Gallery/>} />
                <Route path="/gallery" element={<Home/>} />
            </Routes>
        </Fragment>
    )
}, 'doatkolom-admin-root')