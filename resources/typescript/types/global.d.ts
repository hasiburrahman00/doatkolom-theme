import * as jQuery from '@types/jquery';
import * as Swiper from '@types/swiper';

declare global {
    interface Window {
        jQuery: jQuery;
        Swiper: Swiper;
    }
}
