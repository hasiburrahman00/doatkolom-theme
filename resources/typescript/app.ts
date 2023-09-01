/**
 * events
 */
import '@/events/wpAdminbarResize';
/**
 * web components
 */
import '@/webComponents/header';
import '@/webComponents/searchInput';
/**
 * modules
 */
import Header from '@/module/header';
import Testimonial from '@/module/testimonial';
jQuery(() => {
    new Header();
    new Testimonial();
});
