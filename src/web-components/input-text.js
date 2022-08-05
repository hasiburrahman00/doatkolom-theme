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

customElements.define('doatkolom-input-text', TextInputField);