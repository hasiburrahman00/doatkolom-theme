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
import BlogBanner from '@/module/blogBanner';
import TOCB from '@/module/tocb';

jQuery(() => {
    new Header();
    new Testimonial();
    new BlogBanner();
    new TOCB();
});
