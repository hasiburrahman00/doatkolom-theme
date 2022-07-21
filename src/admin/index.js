import ReactTemplateMount from '../config';
import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Home from './home';
import Gallery from './gallery';
import Developer from './developer';
import Navbar from './components/Navbar';

ReactTemplateMount(()=>{
    return (
        <Fragment>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/developer" element={<Developer/>} />
            </Routes>
        </Fragment>
    )
}, 'doatkolom-admin-root')