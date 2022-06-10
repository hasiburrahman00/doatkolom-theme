import './lib/lazysizes';
import Header from "./modules/header";
import Helper from './utils/Helper';


jQuery(function() {
    'use strict';
    Helper.blockScopeHandler();
    /**
     * 
     * 
     * This class is for header/navigation menu 
     * @param object conains configuration for the menu
     */ 
    new Header({
        breakpoint: 1024
    });


    /**
     * 
     * 
     * 
     * @hook doatkolom/gutenberg_init
     * this hook allows to write js for the gutenberg blocks
     * 
     * 
     * @hook doatkolom/block-name
     * this hook helps to write js for the specific gutenberg block and within the block scope
     * @sinsce 1.0.0
     * @author ashraf
     * 
     */
    
    window.doatkolomGutenbergInit(function( $ ) {
        // scripts for gutenberg block
        const blockScriptList = {
            'doatkolom/page-list' : function( $scope ) {
                console.log($scope)
            }
        }

        // connect script with the gutenberg block
        $.each(blockScriptList, (name, callback) => {
            $(window).on(name, (ev, $scope) => callback($scope))
        })
    })


})