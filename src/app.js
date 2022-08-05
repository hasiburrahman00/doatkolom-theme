import './web-components';
import ReactTemplateMount from './config';
import { Routes, Route } from 'react-router-dom';
import { FrontendContextProvider } from './context';
import Home from './pages/home';
import Teaches from './pages/teachers';
import Result from './pages/result';
import Syllabus from './pages/syllabus'

ReactTemplateMount(()=>{
    return (
        <FrontendContextProvider>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/teachers" element={<Teaches/>} />
                <Route path="/result" element={<Result/>} />
                <Route path="/syllabus" element={<Syllabus/>} />
            </Routes>
        </FrontendContextProvider>
    )
})