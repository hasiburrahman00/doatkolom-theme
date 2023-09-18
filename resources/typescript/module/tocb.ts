const $ = window.jQuery;

export default class TOCB {
    constructor() {
        if ($('body').hasClass('single') && $('.tocb').length > 0) {
            this.init();
        }
    }

    private init() {
        // const $content = $('.doatkolom-post-content');
        $('.tocb-items').first().find('li a').first().addClass('active');
    }
}
