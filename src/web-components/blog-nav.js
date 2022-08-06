class BlogNav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.setAttribute('class', `${this.getAttribute('class')} gap-5 sm:gap-7 grid grid-cols-1 md:grid-cols-2 items-center`);
    }
}

if( !customElements.get( 'doatkolom-blog-nav' ) ) {
    customElements.define('doatkolom-blog-nav', BlogNav);
}