import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

/**
 * 
 * @param Component a general react component
 * @param element refers to DOM id attribute where the react component will be mounted 
 * 
 */ 
export default function ReactTemplateMount(Component, element = 'root') {
  
  jQuery(function(){
    const domElement = document.getElementById(element);
    if( domElement ) {
      createRoot(domElement).render(
        <HashRouter>
          <Component/>
        </HashRouter>
      );
    }
  })

}