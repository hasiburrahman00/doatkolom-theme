import slick from "slick-carousel";
const $ = window.jQuery;

export default function imageSlider($scope){

    const selectors = {
        contentSlide: '.image-slider',
        imageSlide  : '.bottom-image-wrapper',
        dotWrapper  : '.slider-dots',
        nextBtn     : '.slick-next-btn',
        prevBtn     : '.slick-prev-btn',
    }

    const contentSlide  = $scope.find(selectors.contentSlide );
    const imageSlide    = $scope.find(selectors.imageSlide );
    const dotWrapper    = $scope.find(selectors.dotWrapper );
    const nextBtn       = $scope.find(selectors.nextBtn );
    const prevBtn       = $scope.find(selectors.prevBtn );

    imageSlide.slick({
        slidesToShow    : 5,
        centerMode      : true,
        centerPadding   : "0px",
        arrows          : false,
        slidesToScroll  : 1,
        asNavFor        : contentSlide[0],
        focusOnSelect   : true
    });

    contentSlide.slick({
        slidesToShow    : 1,
        slidesToScroll  : 1,
        autoplay        : false,
        fade            : true,
        appendDots      : dotWrapper,
        nextArrow       : nextBtn,
        prevArrow       : prevBtn,
        asNavFor        : imageSlide[0]
    });

}