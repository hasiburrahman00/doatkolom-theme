import ReactTemplateMount from './config';
import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Home from './pages/home';
import Teaches from './pages/teachers';
import Result from './pages/result';

ReactTemplateMount(()=>{
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/teachers" element={<Teaches/>} />
                <Route path="/result" element={<Result/>} />
            </Routes>
        </Fragment>
    )
})