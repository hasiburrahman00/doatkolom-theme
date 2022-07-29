const $ = jQuery;
import Helper from "../utils/Helper";
$.fn.extend({
    /**
     * 
     * 
     * @description dropdown menu position
     * @since 1.0.0
     * @author ashraf
     * 
     */ 
    menuPosition() {
        const $parent = this.parent();
        const width   = this.width();

        let { left, top } = $parent.offset();
        let right         = $(window).width() - left - this.outerWidth(true);
        top -= scrollY

        // check right side spacing
        if( right < 70 ) {
            left = (left + right) - 20;

            if( this.hasClass('sub-menu') ) {
                left -= width/8
            }

        } else {

            if( this.hasClass('sub-menu') ) {
                left += width/8
            }
        }

        $(this).css({
            top: top + $parent.outerHeight() + 'px',
            left: left + 'px'
        })
        
        return this;
    },
    /**
     * 
     * 
     * @description for desktop version manage quickview menu position
     * @since 1.0.0
     * @author ashraf
     * 
     */ 
    quickMenuPosition( button ) {
        let { top, left } = $(button).offset();
        let right = $(window).width() - left;
        top -= scrollY;

        this.css({
            position: 'fixed',
            top: top + $(button).outerHeight() + 16 + 'px',
            right: right - $(button).outerWidth() + 'px',
            zIndex: 999
        })

        return this;
    },

    dropdownValidate() {
        return this;
    },

    toggleHamburger() {
        this.toggleClass('bg-transparent lg:bg-primary_light bg-primary text-black text-white');
        if( innerWidth <= 1024 ) {
            $('#nav-close-btn').removeClass('hidden');
        }
    }

})

export default class Header extends Helper{
    constructor( config ) {
        super();
        this.settings = $.extend({
            breakpoint      : 1024,
            dropdownToggle  : '.dropdown-toggle',
            dropdownMenu    : '.dropdown-menu',
            quickMenu       : '#doatkolom-quick-menu',
            hamburger       : '.doatkolom-menu-button',
            navmenu         : '.doatkolom-main-nav',
            $headerTop      : $('.nav-menu-top'),
            $header         : $('.doatkolom-primary-header'),
            defaultLogoWidth: innerWidth >= 768 ? '80px' : '65px',
        }, config)

        this.matchMediaView( this.settings.breakpoint, {
            before  : this.beforeBreakpoint.bind(this),
            after   : this.afterBreakpoint.bind(this)
        });

        // header related js
        this.settings.$header.find('.doatkolom-nav-logo').animate({
            maxHeight: this.settings.defaultLogoWidth
        })
        this.stickyHandler();
        Helper.onScroll( this.stickyHandler.bind(this) );
    }

    /**
     * 
     * 
     * dropdown menu for mobile and desktop
     * 
     */ 
    beforeBreakpoint() {
        
        const self = this;

        const handler = {
            mobileMenuToggle() {
                $(this).toggleHamburger();
                $(self.settings.navmenu)
                .addClass('fixed hidden top-0 left-0 w-full h-screen bg-white overflow-y-scroll z-20')
                .slideDown()
            },

            in() {
                $(this)
                .find(self.settings.dropdownMenu).first()
                .dropdownValidate()
                .removeClass('hidden')
                .addClass('flex flex-col z-10')
            },

            out() {
                $(this)
                .find(self.settings.dropdownMenu).first()
                .dropdownValidate()
                .removeClass('flex flex-col')
                .addClass('hidden')
            },
        }

        $(self.settings.dropdownToggle).parent()
        .on('mouseenter', handler.in)
        .on('mouseleave', handler.out);
        $(self.settings.hamburger).on('click', handler.mobileMenuToggle);

        //check if it is a hash link
        $(self.settings.navmenu).find('a').on('click', function() {
            if( this.href.includes('#') ) {
                $(this).toggleHamburger();
                $(self.settings.navmenu)
                .removeClass('fixed hidden top-0 left-0 w-full h-screen bg-primary overflow-y-scroll z-20').slideUp(0)
            }
        })
        // close navmenu by clicking the navbar
        $('#nav-close-btn').on('click', function () {
            $(self.settings.hamburger).toggleHamburger();
            $(self.settings.navmenu).removeClass('fixed hidden top-0 left-0 w-full h-screen bg-primary overflow-y-scroll z-20').slideUp(0)
            $(this).addClass('hidden');
        })

    }
    /**
     * 
     * 
     * dropdown menu for laptop and bigger screen
     * 
     */
    afterBreakpoint() {
        const self = this;
        $(self.settings.navmenu).removeClass('fixed top-0 left-0 w-full h-screen bg-primary overflow-y-scroll')
        const handler = {
            in() {
                $(this)
                .find(self.settings.dropdownMenu).first()
                .dropdownValidate()
                .menuPosition()
                .slideDown(100)

                $(self.settings.quickMenu).addClass('hidden')
            },

            out() {
                $(this)
                .find(self.settings.dropdownMenu).first()
                .dropdownValidate()
                .slideUp(100)
            },

            quickMenuToggle() {

                $(this).toggleHamburger();
                $(self.settings.quickMenu)
                .quickMenuPosition(this) // this keyword refers to the hamburger button
                .toggleClass('hidden');
            }
        }
        
        $(self.settings.dropdownToggle).parent()
        .on('mouseenter', handler.in)
        .on('mouseleave', handler.out)

        $(self.settings.hamburger).on('click', handler.quickMenuToggle)

        $(document).on('click', ev => {  
            if( ev.target.closest( self.settings.quickMenu) || ev.target.closest(self.settings.hamburger) ) {
                return;
            }
            $(self.settings.quickMenu).addClass('hidden')
        })
    }
    /**
     * 
     * 
     * header sticky position and logo width handler
     * 
     */ 
    stickyHandler() {
        const self = this;
        const { $headerTop, $header } = self.settings;

        if( $headerTop && scrollY > $headerTop.outerHeight() && $header.attr('data-show') == 0 ) {
            
            // extra: variable will have the height equal to wordpress admin bar
            const extra = $('#wpadminbar').length && innerWidth > 600 ? $('#wpadminbar').outerHeight() : 0;

            // add styles to header to make it sticky
            $header.attr('data-show', 1)
                    .css('top', extra + 'px')
                    .addClass('fixed w-full left-0 z-20 shadow-lg')
                    .next().next().css({
                        marginTop: `${$header.outerHeight()}px`
                    });

            // change header logo width when header become sticky 
            $header.find('.doatkolom-nav-logo').animate({
                maxHeight: "50px"
            })
        }

        if( scrollY <= $headerTop.outerHeight() && $header.attr('data-show') == 1 ) {
            
            // change header logo width when header is not sticky 
            $header.find('.doatkolom-nav-logo').animate({
                maxHeight: self.settings.defaultLogoWidth
            })
                    
            // remove some style form header to make it static
            $header.attr('data-show', 0)
                    .removeClass('fixed left-0 z-20 shadow-lg')
                    .next().next().css({
                        marginTop: 0
                    });
        }
    }

}