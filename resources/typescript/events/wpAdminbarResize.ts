import { WP_ADMINBAR_SELECTOR_ID } from '@/inc/constants';
import { isEqual } from 'lodash';
import type { AdminbarRect } from '@/types';
/**
 * listen to wordpress adminbar element resizing
 */
window.addEventListener('DOMContentLoaded', () => {
    const eventName = 'doatkolom/wp-adminbar';
    let value: AdminbarRect;

    const dispatchEvent = (detail: AdminbarRect) =>
        window.dispatchEvent(new CustomEvent(eventName, { detail }));

    const element = document.getElementById(WP_ADMINBAR_SELECTOR_ID);
    if (element) {
        // initial
        const initialRect = element.getBoundingClientRect();
        value = {
            visible: true,
            height: initialRect.height,
            offsetTop: initialRect.top,
        };

        dispatchEvent(value);

        const resizeCallback = () => {
            const rect = element.getBoundingClientRect();
            const newValue: AdminbarRect = {
                visible: true,
                height: rect.height,
                offsetTop: rect.top,
            };

            if (!isEqual(value, newValue)) {
                value = newValue;
                dispatchEvent(newValue);
            }
        };

        window.addEventListener('scroll', resizeCallback);
        window.addEventListener('resize', resizeCallback);
    } else {
        dispatchEvent({
            visible: false,
        });
    }
});
