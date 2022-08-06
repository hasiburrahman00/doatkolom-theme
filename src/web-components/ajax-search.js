class AjaxSearch extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = this.render();
    }

    searchIcon() {
        return `
            <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z" fill="currentColor"/></svg>
        `
    }

    render() {
        return(
            `<form class="flex items-center" role="search" method="get" action="${this.getAttribute('action')}">
                <input 
                    class="font-secondary rounded-tl-lg rounded-bl-lg focus:border-black focus:shadow-none focus:outline-none font-weight_primary flex-1 inline-block px-5 h-[50px] bg-white border border-solid border-border text-base" 
                    name="s"
                    value="${this.getAttribute('value')}"
                    placeholder="Search into blog post..."/>
                <button type="submit" class="bg-black tex-base h-[50px] border border-solid border-black text-white font-secondary hover:border-primary -ml-1 font-weight_primary cursor-pointer hover:bg-primary transition duration-200 ease-linear rounded-tr-lg rounded-br-lg px-6">${this.searchIcon()}</button>
            </form>`
        )
    }
}

if( !customElements.get( 'doatkolom-ajax-search' ) ) {
    customElements.define('doatkolom-ajax-search', AjaxSearch);
}