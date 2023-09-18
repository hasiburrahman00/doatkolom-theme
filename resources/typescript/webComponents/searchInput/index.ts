import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
const $ = window.jQuery;

@customElement('doatkolom-search-input')
export class Header extends LitElement {
    @property({ type: String })
    value = '';

    @property({ type: String })
    action = '';

    constructor() {
        super();
        this.events();
    }

    static get styles() {
        return css`
            .search-input-field {
                display: flex;
                width: 213px;
                padding-left: 14px;
                align-items: center;
                border: 1px solid rgba(145, 158, 171, 0.32);
                border-radius: 8px;
                column-gap: 8px;
                overflow: hidden;
                transition: border-color 0.2s ease-in-out;
            }

            .search-input-field:focus-within {
                border-color: #517dfc;
            }

            .search-input-field:focus-within svg {
                color: #517dfc;
            }

            input {
                height: 38px;
                width: 100%;
                padding-right: 8px;
                border: 0;
            }

            input:focus,
            input:active,
            input:hover {
                outline: none;
            }

            input::placeholder {
                color: #919eab;
                font-size: 14px;
                font-weight: 400;
            }

            button {
                display: inline-flex;
                padding: 0;
                color: #ccc;
                border: 0;
                background-color: transparent;
            }

            svg {
                transition: color 0.2s ease-in-out;
            }

            @media (max-width: 1200px) {
                input {
                    display: none;
                }

                .search-input-field {
                    width: 38px;
                    padding-left: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 38px;
                    pointer-events: none;
                }

                button {
                    pointer-events: none;
                }
            }
        `;
    }

    private submitForm(e: Event) {
        const formData = new FormData(e.target as HTMLFormElement);
        const searchValue = formData.get('s');
        if (!searchValue) {
            e.preventDefault();
            return;
        }

        if (
            typeof searchValue === 'string' &&
            searchValue.trim().length === 0
        ) {
            e.preventDefault();
            return;
        }
    }

    private events() {
        $(document).on('click', '.close-mobile-search', function () {
            $('.mobile-search').remove();
        });
    }

    private mobileSearchMarkup() {
        return `
            <div class="mobile-search">
                <button class="close-mobile-search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 5L15 15" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <form
                    role="search"
                    method="get"
                    action="${this.action}"
                    @submit=${this.submitForm}
                >
                    <div class="mobile-search-input-field">
                        <input
                            value="${this.value}"
                            placeholder="Search Here"
                            type="search"
                            name="s" 
                        />
                        <button type="submit" value="submit">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none">
                                <g>
                                    <path
                                        d="M17.31 15.9L20.71 19.29C20.8993 19.4778 21.0058 19.7334 21.0058 20C21.0058 20.2666 20.8993 20.5222 20.71 20.71C20.5222 20.8993 20.2666 21.0058 20 21.0058C19.7334 21.0058 19.4778 20.8993 19.29 20.71L15.9 17.31C14.5025 18.407 12.7767 19.0022 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19.0022 12.7767 18.407 14.5025 17.31 15.9ZM11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5Z"
                                        fill="currentColor" />
                                </g>
                            </svg>
                        </button> 
                    </div>
                    <h2>Press enter to search</h2>
                    <input type="hidden" name="post_type" value="post" />
                </form>
            </div>
        `;
    }

    private openMobileSearch() {
        if (innerWidth > 1200) return;

        const body = document.querySelector('body');
        if (!body) return;

        const mobileSearch = body.querySelector('.mobile-search');
        if (mobileSearch) return;

        const mobileSearchMarkup = this.mobileSearchMarkup();
        body.insertAdjacentHTML('beforeend', mobileSearchMarkup);
    }

    protected render() {
        return html`
            <form
                role="search"
                method="get"
                @click=${this.openMobileSearch}
                action="${this.action}"
                @submit=${this.submitForm}>
                <div class="search-input-field">
                    <button type="submit" value="submit">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none">
                            <g>
                                <path
                                    d="M17.31 15.9L20.71 19.29C20.8993 19.4778 21.0058 19.7334 21.0058 20C21.0058 20.2666 20.8993 20.5222 20.71 20.71C20.5222 20.8993 20.2666 21.0058 20 21.0058C19.7334 21.0058 19.4778 20.8993 19.29 20.71L15.9 17.31C14.5025 18.407 12.7767 19.0022 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19.0022 12.7767 18.407 14.5025 17.31 15.9ZM11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5Z"
                                    fill="currentColor" />
                            </g>
                        </svg>
                    </button>
                    <input
                        value="${this.value}"
                        placeholder="Search Here"
                        type="search"
                        name="s" />
                </div>
                <input type="hidden" name="post_type" value="post" />
            </form>
        `;
    }
}
