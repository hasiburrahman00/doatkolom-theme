import  './../lib/lightbox';

const $ = window.jQuery;
const $window = window.$window || $(window);

const ScreenshotSlider = {
    
    selectors: {
        scope       : '.product-screenshot-wrap',
        preview     : '.product-screenshot-preview',
        imageSlide  : '.slider-wrap',
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
        const preview       = $scope.find( self.selectors.preview );
        const imageSlide    = $scope.find( self.selectors.imageSlide );
        const nextBtn       = $scope.find( self.selectors.nextBtn );
        const prevBtn       = $scope.find( self.selectors.prevBtn );

        preview.slick({
            slidesToShow    : 1,
            slidesToScroll  : 1,
            dots            : false,
            infinite        : false,
            fade            : true,
            arrows          : false,
            adaptiveHeight  : true,
            asNavFor        : imageSlide[0]
        });

        imageSlide.slick({
            slidesToShow    : 3,
            slidesToScroll  : 1,
            infinite        : false,
            asNavFor        : preview[0],
            focusOnSelect   : true,
            centerMode      : false,
            nextArrow       : nextBtn,
            prevArrow       : prevBtn,
        });
    },

    /**
     * 
     * 
     * Active lightbox 
     * 
     */ 
    activeLightbox( $scope ) {
        const id = $scope.data('id');
        lightbox( '.lightbox-' + id , {
            close: true,
            closeText: "X",
            docClose: true
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
            self.activeSlider( $(item) );
            self.activeLightbox( $(item) );
        })
    },

};

export default ScreenshotSlider;