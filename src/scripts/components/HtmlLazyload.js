const $ = window.jQuery;
const $window = window.$window || $(window);

const HtmlLazyload = {
    elements: [],
    init( callback ) {
        const self = this;
        self.callback = callback;
        self.passed = false;
        self.elements.$template = $('.html-lazyload');  /* select all html lazyloader element */
        window.addEventListener('scroll', self.scrollEvent.bind(self));
    },

    scrollEvent() {
        const self = this;
        if( window.pageYOffset > 100 && !self.passed ) {
            self.passed = true;
            self.elements.$template.each( (index, template) => {
                const content = $(template).html();
                $(template).after(content)
            })
            self.callback();
        }
    },

};

export default HtmlLazyload;