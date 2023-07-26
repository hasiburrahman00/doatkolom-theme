import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { isEqual } from 'lodash';
import type { AdminbarRect } from '@/types';

@customElement('doatkolom-header')
export class Header extends LitElement {
    private eventName = 'doatkolom/resize-header';
    @state()
    css = {
        height: 0,
        width: 0,
    };

    @state()
    wpAdminbar = {
        height: 0,
        offsetTop: 0,
        visible: false,
    };

    constructor() {
        super();
        this.innerElementObserver();
        this.events();
    }

    private events() {
        const self = this;
        window.addEventListener(
            'doatkolom/wp-adminbar',
            (ev: CustomEventInit<AdminbarRect>) => {
                const detail = ev.detail;
                if (detail && detail.visible) {
                    self.wpAdminbar = detail;
                }
            }
        );
    }

    private eventdispatch() {
        window.dispatchEvent(
            new CustomEvent(this.eventName, {
                detail: this.css,
            })
        );
    }

    private innerElementObserver() {
        const self = this;
        const element = self.querySelector('header');
        if (!element) return;

        const observer = new ResizeObserver(() => {
            const { height, width } = element.getBoundingClientRect();

            if (!isEqual(self.css, { width, height })) {
                self.css = {
                    width,
                    height,
                };
                self.eventdispatch();
            }
        });

        observer.observe(element);
    }

    protected createRenderRoot() {
        return this;
    }

    private calcHeaderPosition() {
        let value = this.wpAdminbar.height;
        if (this.wpAdminbar.offsetTop <= 0) {
            value =
                this.wpAdminbar.height - Math.abs(this.wpAdminbar.offsetTop);
        } else {
            value = this.wpAdminbar.height + this.wpAdminbar.offsetTop;
        }

        if (value < 0) return 0;
        return value;
    }

    protected render() {
        return html`<style>
            doatkolom-header {
                height: ${this.css.height}px;
                width: 100%;
                display: inline-block;
            }

            doatkolom-header header {
                position: fixed;
                left: 0;
                width: 100%;
                z-index: 999;
            }

            ${this.wpAdminbar.visible
                ? `
                    doatkolom-header header {
                        top: ${this.calcHeaderPosition()}px;
                    }
                `
                : `
                    doatkolom-header header {
                        top: 0
                    }
                `}
        </style>`;
    }
}
