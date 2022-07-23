import './lib/lazysizes';
import Header from "./modules/header";
import Helper from './utils/Helper';
import honorableTeachers1 from './blocks/honorable-teachers-1/script';
import timelineTab1 from './blocks/timeline-tab-1/script';
import imageSlider1 from './blocks/image-slider-1/script';
import InfiniteScroll from './modules/infinite-scroll';
import labSection1 from './blocks/lab-section-1/script';


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

    // for photo gallery infinite scroll
    new InfiniteScroll();
    



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
            'doatkolom/honorable-teachers-1' : honorableTeachers1,
            'doatkolom/image-slider-1' : imageSlider1,
            'doatkolom/timeline-tab-1': timelineTab1,
            'doatkolom/lab-section-1': labSection1,
        }

        // connect script with the gutenberg block
        $.each(blockScriptList, (name, callback) => {
            $(window).on(name, (ev, $scope) => {
                callback($scope, $scope.data('settings'))
            })
        })
    })


})