import Helper from "../utils/helper";

const $ = window.jQuery;
const $window = window.$window || $(window);

const Header = {
    elements: [],
    init() {
        this.elements.$header = $('#doatkolom-main-header');  /* select main header */

        /**
         * 
         * 
         *  Select necessary dom element 
         */ 
        if( this.elements.$header.length > 0 ) {
            this.elements.$navMenu      = this.elements.$header.find('.doatkolom-nav'); /* select nav menu */
            this.elements.$hamburger    = this.elements.$header.find('.hamburger'); /* select hamburger button */
            this.elements.$dropDownLink = this.elements.$navMenu.find('.menu-item-has-children > .nav-link'); /* select dropdown link */
            this.elements.$body         = $('body'); /* select body */
        }

        this.stickyHeader();
        this.responsiveHeader();
    },

    /**
     * 
     * 
     * chane sticky menu background color after being scrolled 50px; 
     */ 
    stickyHeader() {
        const self = this;
        const listenScroll = () => {
            if( scrollY > 50 ) 
                    self.elements.$header.addClass('sticky-bg')
                else 
                    self.elements.$header.removeClass('sticky-bg');
        }
        listenScroll();
        window.onscroll = listenScroll;
        
    },

    /**
     * 
     * 
     * responsive header 
     * 
     */ 
     responsiveHeader() {
        const self = this;
        Helper.isBigger(991, response => {
            self.elements.$body.toggleClass('doatkolom-screen-desktop', response);
            self.elements.$body.toggleClass('doatkolom-screen-mobile', !response);
            if( !response ) {
                self.hamburgerHandler();
            }
        })
     },

    /**
     * 
     * 
     * 
     * Hamburger and mobile menu collapse handler 
     */  
    hamburgerHandler() {
        const self = this;
        const { $hamburger, $navMenu, $dropDownLink} = self.elements;
        
        $hamburger.on('click', function(ev){
            ev.preventDefault();
            ev.stopPropagation();
            $navMenu.slideToggle()
        })

        $dropDownLink.on('click', function(ev){
            ev.preventDefault();
            ev.stopPropagation();
            $(this).next().slideToggle();
            return false;
        })
        
    }

};

export default Header;