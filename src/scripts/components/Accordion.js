const $ = window.jQuery;
const $window = window.$window || $(window);

const Accordion = {
    
    selectors: {
        scope       : '.doatkolom-accordion',
        item        : '.accordion-item',
        title       : '.doatkolom-item-title',
        body        : '.accordion-body',
        arrow       : '.header-arrow',
    },
    elements: {},

    init() {
        this.elements.$scope = $(this.selectors.scope);
        this.findAccordion();
    },

    /**
     * 
     * 
     * Active/init slider
     * 
     */ 
    activeAccordion( $scope ) {
        const self = this;
        self.elements.$item  = $scope.find( self.selectors.item );
        self.elements.$title = $scope.find( self.selectors.title );
        self.elements.$body  = $scope.find( self.selectors.body );
        self.elements.$arrow = $scope.find( self.selectors.arrow );
        self.elements.$title.on('click', self.openBody.bind(self));
    },

    openBody( event ) {
        event.preventDefault();
        event.stopPropagation();

        const self = this;
        const target = $(event.currentTarget);
        const uniqueArrow = target.find( self.selectors.arrow );
        const uniqueClass = '.' + target.data('target');
        const bodyUniqueClass = $(uniqueClass);
        
        // close other item
        self.elements.$arrow.removeClass('rotate-90')
        self.elements.$body.slideUp();

        // open targeted item
        if( !bodyUniqueClass.hasClass('open') ) {
            self.elements.$body.removeClass('open');
            self.elements.$title.removeClass('bg-gray-200')
            bodyUniqueClass.slideDown();
            uniqueArrow.addClass('rotate-90')
        }
        
        target.toggleClass('bg-gray-200');
        bodyUniqueClass.toggleClass('open')
        return false;
    },

    /**
     * 
     * 
     * Find accordion markup
     */ 
     findAccordion() {
        const self = this;
        self.elements.$scope.each( (index, item) => {
            self.activeAccordion( $(item) );
        })
    },

};

export default Accordion;