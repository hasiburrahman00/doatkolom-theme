const $ = window.jQuery;
const $window = window.$window || $(window);

const BlogViewMode = {
    
    selectors: {
        scope       : '#blog-view-mode-container',
        button      : '.doatkolom-view-mode-btn',
        grid        : '#view-mode-article-container',
        article     : '#view-mode-article-container article',
        content     : '.doatkolom-view-mode-content',
        title       : '.doatkolom-article-title',
        date        : '.doatkolom-meta-date'
    },
    elements: {},

    init() {
        this.elements.$scope = $(this.selectors.scope);
        this.findScope();
    },

    active_grid_view() {

        this.$grid.addClass('lg:grid-cols-2');
        this.$date.hide();
        this.$article
            .removeClass('sm:bg-doatkolom-gray-100 md:p-7 sm:flex')
            .addClass('md:p-0');
        this.$content
            .removeClass('lg:ml-7 md:mb-2')
            .addClass('lg:ml-0');
        this.$title
            .removeClass('lg:text-2xl md:mb-4 sm:ml-2')
            .addClass('lg:mt-4 lg:text-base');
        
    },

    active_list_view() {
        this.$grid.removeClass('lg:grid-cols-2');
        this.$date.show();
        this.$article
            .removeClass('md:p-0')
            .addClass('sm:bg-doatkolom-gray-100 md:p-7 sm:flex');
        this.$content
            .removeClass('lg:ml-0')
            .addClass('lg:ml-7 sm:ml-3');
        this.$title
            .removeClass('lg:mt-4 lg:text-base md:mb-2')
            .addClass('lg:text-2xl md:mb-4');
    },
     
    activeViewMode( $scope ) {

        const self      = this;
        const DOMelements = {
            $button  : $scope.find( self.selectors.button ),
            $grid    : $scope.find( self.selectors.grid ),
            $article : $scope.find( self.selectors.article ),
            $content : $scope.find( self.selectors.content ),
            $title   : $scope.find( self.selectors.title ),
            $date    : $scope.find( self.selectors.date ),
        }

        DOMelements.$button.on('click', function() {
            const view = this.dataset.view;
            
            // switch button active color
            DOMelements.$button.removeClass('text-doatkolom-purple-800')
            $(this).addClass('text-doatkolom-purple-800')

            // call view methds to change style to list, grid view
            self[`active_${view}_view`].apply(DOMelements)
        })
    },

    /**
     * 
     * 
     * Find view mode markup
     */ 
     findScope() {
        const self = this;
        self.elements.$scope.each( (index, item) => {
            self.activeViewMode( $(item) )
        })
    },

};

export default BlogViewMode;