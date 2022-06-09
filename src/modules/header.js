const $ = jQuery;
import Helper from "../utils/Helper";

$.fn.extend({
    menuPosition() {
        const $parent = this.parent();
        const width   = this.width();

        let { left, top } = $parent.offset();
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

    quickMenuPosition( button ) {
        let { top, left } = $(button).offset();
        let right = $(window).width() - left;

        this.css({
            position: 'fixed',
            top: top + $(button).outerHeight() + 16 + 'px',
            right: right - $(button).outerWidth() + 'px'
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
        }, config)

        this.matchMediaView( this.settings.breakpoint, {
            before  : this.beforeBreakpoint.bind(this),
            after   : this.afterBreakpoint.bind(this)
        });
    }


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
                .addClass('flex flex-col')
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

}