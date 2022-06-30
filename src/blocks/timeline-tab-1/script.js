import Helper from "../../utils/Helper";
export default function timelineTab1( $scope ) {
    
    const $element  = $scope.find('.doatkolom-image-tab');
    const $line     = $scope.find('.vertical-line');
    const offset    = $element.offset();
    const height    = $element.outerHeight();

    /**
     * 
     * 
     * 
     * manage tab vertical line based on scrolling
     * @since 1.0.0
     * @author ashraf 
     */ 
    function scrollHandler( scrollTop ) {
        const to        = offset.top + height; // get the end of scroll scrope 
        const scroll    = scrollTop + window.innerHeight; // current scrolling position, to target bottom screen, add window inner height
        let innerScroll = 0

        if( scroll >= offset.top ) {
            innerScroll =  scroll - offset.top
        }

        if( scroll >= to ) {
            innerScroll = height
        }

        const percentage = Math.ceil(innerScroll / height * 100) // get the percentage of scrolling 
        
        if( scroll > offset.top - 200 && scroll < to + 200 && innerWidth >= 1024 ) {
            $line.css('height', percentage + '%');
        }
    }

    /**
     * 
     * 
     * active tab based using observer API. 
     * when image will be fully visible to the screen, it's associated tab should be hilighted
     * @since 1.0.0
     * @author ashraf
     */ 
    function activeTabHandler( target = 0 ) {
        if( innerWidth <= 1024 ) return;
        $scope.find('.tab-item').addClass('opacity-50');
        $scope.find(`.tab-item-index-${target}`).removeClass('opacity-50');
    }
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    }

    function obcallback(payload) {
        if( payload[0].isIntersecting && innerWidth > 1024 ) {
            activeTabHandler(payload[0].target.dataset.index)
        }
    }

    //tab image observer
    const observer = new IntersectionObserver(obcallback, options);
    $scope.find('.image-tab-item').each( (_, item) => observer.observe(item.querySelector('img')) )


    //click to active tab handler
    $scope.find('.tab-item').on('click', function(){
        document.getElementById(`tab-image-index-${this.dataset.index}`)
        .scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    })

    // scroll event handler
    Helper.onScroll(scrollHandler)
    // initla active tab, index = 0
    activeTabHandler()

}