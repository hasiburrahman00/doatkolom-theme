

import ReactTemplateMount from '../config';
import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Home from './home';
import Gallery from './gallery';

ReactTemplateMount(()=>{
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/gallery" element={<Gallery/>} />
            </Routes>
        </Fragment>
    )
}, 'doatkolom-admin-root')