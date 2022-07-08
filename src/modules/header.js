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

        let { left, top } = $parent.position();
        let right         = $(window).width() - left - this.outerWidth(true);

        // check right side spacing
        if( right < 70 ) {
            left = (left + right) - 20;

            if( this.hasClass('sub-menu') ) {
                left -= width/3
            }

        } else {

            if( this.hasClass('sub-menu') ) {
                left += width/3
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
            hamburger       : '#doatkolom-menu-button',
            navmenu         : '.doatkolom-main-nav',
            $headerTop      : $('.nav-menu-top'),
            $header         : $('.doatkolom-primary-header'),
            defaultLogoWidth: innerWidth >= 768 ? '80px' : '60px',
        }, config)

        this.matchMediaView( this.settings.breakpoint, {
            before  : this.beforeBreakpoint.bind(this),
            after   : this.afterBreakpoint.bind(this)
        });

        // header related js
        this.settings.$header.find('.doatkolom-nav-logo').animate({
            width: this.settings.defaultLogoWidth,
            height: this.settings.defaultLogoWidth
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
                $(this).toggleClass('fixed right-5 top-5 z-10 border border-solid border-white')

                $(self.settings.navmenu)
                .addClass('fixed hidden top-0 left-0 w-full h-screen bg-primary overflow-y-scroll')
                .slideToggle()
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

        $(self.settings.dropdownToggle).parent().hover( handler.in, handler.out )
        $(self.settings.hamburger).on('click', handler.mobileMenuToggle)
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
                $(self.settings.quickMenu)
                .quickMenuPosition(this) // this keyword refers to the hamburger button
                .toggleClass('hidden');
            }
        }
        
        $(self.settings.dropdownToggle).parent().hover( handler.in, handler.out )
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
            const extra = $('#wpadminbar').length ? $('#wpadminbar').outerHeight() : 0;

            // add styles to header to make it sticky
            $header.attr('data-show', 1)
                    .css('top', extra + 'px')
                    .addClass('fixed w-full left-0 z-10 shadow-lg')
                    .next().next().css({
                        marginTop: `${$header.outerHeight()}px`
                    });

            // change header logo width when header become sticky 
            $header.find('.doatkolom-nav-logo').animate({
                width: '50px',
                height: '50px'
            })
        }

        if( scrollY <= $headerTop.outerHeight() && $header.attr('data-show') == 1 ) {
            
            // change header logo width when header is not sticky 
            $header.find('.doatkolom-nav-logo').animate({
                width: self.settings.defaultLogoWidth,
                height: self.settings.defaultLogoWidth
            })
                    
            // remove some style form header to make it static
            $header.attr('data-show', 0)
                    .removeClass('fixed left-0 z-10 shadow-lg')
                    .next().next().css({
                        marginTop: 0
                    });
        }
    }

}