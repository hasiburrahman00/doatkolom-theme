export default class Testimonial {
    constructor() {
        new window.Swiper('.swiper', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 20,
            autoplay: {
                delay: 2500,
            },

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
}
