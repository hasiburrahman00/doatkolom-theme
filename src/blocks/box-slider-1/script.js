import slick from "slick-carousel";
const $ = window.jQuery;

export default function boxSlider1($scope){

    const selectors = {
        contentSlide: '.box-slider',
        nextBtn     : '.slick-next-btn',
        prevBtn     : '.slick-prev-btn',
    }

    const contentSlide  = $scope.find(selectors.contentSlide );
    const nextBtn       = $scope.find(selectors.nextBtn );
    const prevBtn       = $scope.find(selectors.prevBtn );

    contentSlide.slick({
        slidesToShow    : 5,
        slidesToScroll  : 1,
        autoplay        : true,
        nextArrow       : nextBtn,
        prevArrow       : prevBtn,
        centerMode      : true,
        centerPadding   : "0px"
    });

}