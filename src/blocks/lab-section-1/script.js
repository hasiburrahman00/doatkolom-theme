const $ = window.jQuery;

export default function labSection1( $scope ) {

    const $indicator = $scope.find('.doatkolom-indicator');
    const $card = $scope.find('.doatkolom-card');

    if( $card.length < 2) return;

    const centerCard = Math.ceil( $card.length/2 ) -1;
    
    $card.css("position","relative")
    $scope.css({
        position: "relative",
        zIndex: 1
    });

    const indicatorCursor = $active => {
        const indicatorCard = $scope.offset();
        const activeCard    = $active.offset();
        const x = activeCard.left - indicatorCard.left;
        const y = activeCard.top - indicatorCard.top;
        const w = $active.outerWidth()
        const h = $active.outerHeight()

        $indicator.animate({
            left    : x + "px",
            top     : y + "px",
            width   : w + "px",
            height  : h + "px"
        });

    };

    indicatorCursor( $($card[centerCard]) );

   $card.on('mouseenter',function() {
     indicatorCursor( $(this) );
   })

}