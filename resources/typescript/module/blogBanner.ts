const $ = window.jQuery;

export default class BlogBanner {
    constructor() {
        const $scope = $('.doatkolom-archive-category-swiper');

        if (!$scope.length) {
            return;
        }

        const activeSlide = $scope.find('.swiper-slide[data-active="true"]');
        const index = activeSlide.data('index');

        new window.Swiper('.doatkolom-archive-category-swiper', {
            slidesPerView: 'auto',
            initialSlide: index,
            centeredSlides: true,
            centeredSlidesBounds: true,
        });
    }
}
