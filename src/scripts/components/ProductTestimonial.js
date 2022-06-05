const $ = window.jQuery;
const $window = window.$window || $(window);

const ProductTestimonial = {
    
    selectors: {
        scope       : '.product-testimonial-wrap',
        contentSlide: '.product-testimonial',
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
        const dotWrapper    = $scope.find( self.selectors.dotWrapper );
        const nextBtn       = $scope.find( self.selectors.nextBtn );
        const prevBtn       = $scope.find( self.selectors.prevBtn );

        contentSlide.slick({
            slidesToShow    : 1,
            slidesToScroll  : 1,
            dots            : true,
            autoplay        : true,
            appendDots      : dotWrapper,
            nextArrow       : nextBtn,
            prevArrow       : prevBtn,
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

export default ProductTestimonial;