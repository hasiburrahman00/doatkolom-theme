import Header from "./modules/header";


jQuery(function() {
    'use strict';
    /**
     * 
     * 
     * This class is for header/navigation menu 
     * @param object conains configuration for the menu
     */ 
    new Header({
        breakpoint: 1024
    });

})