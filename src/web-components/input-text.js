class TextInputField extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div>This is a really awesome component!</div>
      `;
    }
}

if( !customElements.get( 'doatkolom-input-text' ) ) {
    customElements.define('doatkolom-input-text', TextInputField);
}