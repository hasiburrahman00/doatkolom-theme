import { createRoot } from 'react-dom/client';
import Home from './pages/home';
import Teachers from './pages/teachers';
import Result from './pages/result';

import { BrowserRouter } from 'react-router-dom';

export default function pageInit(Component, element) {
  const domElement = document.getElementById(element);
  if( domElement ) {
    createRoot(domElement).render(
      <BrowserRouter>
        <Component/>
      </BrowserRouter>
    );
  }
}

