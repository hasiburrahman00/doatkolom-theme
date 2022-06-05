const $ = window.jQuery;
const $window = window.$window || $(window);

const Testimonial = {
    
    selectors: {
        scope       : '.doatkolom-testimonial',
        contentSlide: '.content-slide-wrapper',
        imageSlide  : '.testimonial-slides',
        dotWrapper  : '.slider-dots',
        nextBtn     : '.slick-next-btn',
        prevBtn     : '.slick-prev-btn',
    },
    elements: {},

    init() {
        this.elements.$scope = $(this.selectors.scope);
        this.findSlider();
    },

    /**
     * 
     * 
     * Active/init slider
     * 
     */ 
    activeSlider( $scope ) {
        const self = this;
        const contentSlide  = $scope.find( self.selectors.contentSlide );
        const imageSlide    = $scope.find( self.selectors.imageSlide );
        const dotWrapper    = $scope.find( self.selectors.dotWrapper );
        const nextBtn       = $scope.find( self.selectors.nextBtn );
        const prevBtn       = $scope.find( self.selectors.prevBtn );

        imageSlide.slick({
            slidesToShow    : 3,
            slidesToScroll  : 1,
            asNavFor        : contentSlide[0],
            focusOnSelect   : true
        });

        contentSlide.slick({
            slidesToShow    : 1,
            slidesToScroll  : 1,
            dots            : true,
            appendDots      : dotWrapper,
            nextArrow       : nextBtn,
            prevArrow       : prevBtn,
            asNavFor        : imageSlide[0]
        });

    },

    /**
     * 
     * 
     * Find Slider markup
     */ 
     findSlider() {
        const self = this;
        self.elements.$scope.each( (index, item) => {
            self.activeSlider( $(item) )
        })
    },

};

export default Testimonial;