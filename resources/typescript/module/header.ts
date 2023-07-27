const $ = window.jQuery;

export default class Header {
    breakpoint = 1024;
    wpadminbar: HTMLElement | null;
    header: HTMLElement | null;
    $header: JQuery<HTMLDivElement>;
    $line: JQuery<HTMLOrSVGElement>;
    $hamburger: JQuery<HTMLButtonElement>;
    $overlay: JQuery<HTMLDivElement>;
    $menu: JQuery<HTMLDivElement>;
    $body: JQuery<HTMLBodyElement>;

    constructor() {
        // html selectors
        this.wpadminbar = document.getElementById('wpadminbar');
        this.header = document.getElementById('doatkolom-theme-header');
        // jquery selectors
        this.$body = $('body');
        this.$header = this.$body.find<HTMLDivElement>(
            '#doatkolom-theme-header'
        );
        this.$hamburger =
            this.$header.find<HTMLButtonElement>('.breadcrumb-btn');
        this.$line = this.$hamburger.find('#last-hamburger-line');
        this.$overlay = $('.header-overlay');
        this.$menu = this.$header.find<HTMLDivElement>('.doatkolom-nav');
        // events
        this.events();
    }

    private events(): void {
        /**
         * header sticky handler
         */
        if (this.header) {
            this.sticky();
            $(window).on('scroll', this.sticky.bind(this));
        }

        /**
         * mobile menu handler
         */
        if (this.$header.length) {
            this.$hamburger.on('click', () => {
                if (this.$body.hasClass('mobile-menu-opened')) {
                    this.hideNavigation();
                } else {
                    this.showNavigation();
                }
            });
            this.$overlay.on('click', this.hideNavigation.bind(this));

            /**
             * When Viewport is changed
             */
            const mql = window.matchMedia('(max-width: 1023px)');
            const onMediaChange = (event: MediaQueryListEvent) => {
                if (!event.matches) {
                    this.hideNavigation();
                }
            };
            mql.addListener(onMediaChange);
        }

        /**
         *  hash route handler
         */
        this.hashRouteHandler();
    }

    private sticky(): void {
        const y = window.scrollY;
        if (
            this.header &&
            this.$body.hasClass('mobile-menu-opened') === false
        ) {
            if (y > 0) {
                this.header.classList.add('sticky');
            } else {
                this.header.classList.remove('sticky');
            }
        }
    }

    private showNavigation(): void {
        const self = this;
        if (innerWidth > this.breakpoint || !self.header) return;

        self.$line.animate({
            x: '0',
            width: '100%',
        });

        self.$overlay.fadeIn();
        self.$header.addClass('sticky');
        self.$body.addClass('mobile-menu-opening');
        self.$menu.slideDown(400, function () {
            self.$body
                .removeClass('mobile-menu-opening')
                .addClass('mobile-menu-opened');
        });
    }

    private hideNavigation(): void {
        const self = this;
        self.$line.animate({
            x: '8',
        });

        self.$menu.slideUp(400, function () {
            self.$overlay.fadeOut();

            self.$body
                .removeClass('mobile-menu-opened')
                .removeClass('mobile-menu-opening');

            self.$menu.removeAttr('style');
            self.sticky();
        });
    }

    private hashRouteHandler(): void {
        const self = this;
        const btns = self.$menu.find('a');
        btns.on('click', (ev: JQuery.ClickEvent) => {
            ev.stopPropagation();
            self.hideNavigation();
        });
    }
}
