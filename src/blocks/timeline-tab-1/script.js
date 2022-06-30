import Helper from "../../utils/Helper";

const $ = window.jQuery;
export default function timelineTab1( $scope ) {
    
    const $element  = $scope.find('.doatkolom-image-tab');
    const $line     = $scope.find('.vertical-line');
    const offset    = $element.offset();
    const height    = $element.outerHeight();

    function scrollHandler( scrollTop ) {
        const to        = offset.top + height;
        const scroll    = scrollTop + window.innerHeight; 
        let innerScroll = 0

        if( scroll >= offset.top ) {
            innerScroll =  scroll - offset.top
        }

        if( scroll >= to ) {
            innerScroll = height
        }

        const percentage = Math.ceil(innerScroll / height * 100)
        
        if( scroll > offset.top - 200 && scroll < to + 200 ) {
            $line.css('height', percentage + '%')
        }
        

    }

    Helper.onScroll(scrollHandler)
}