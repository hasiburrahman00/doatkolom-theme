<?php 
use Doatkolom\App\View;
use Doatkolom\Doatkolom;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

add_filter( 'body_class', function( $classes ) {
    return array_merge( $classes, ['has-white-header'] );
} );

View::page_title('404');
get_header();

?>
<div  class="max-w-[700px] px-3 mx-auto text-center py-12 md:py-16 text-secondary">
    <h2 class="text-3xl md:text-6xl font-bold capitalize">Sorry, Page Not Found!</h2>
    <p class="max-w-lg pt-4 mx-auto text-secondary/70 pb-10">Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL? Be sure to check your spelling.</p>
    <picture>
        <source srcset="<?php echo esc_url( Doatkolom::url('assets/images/common/ghost-mobile.webp') ) ?>" type="image/webp" media="(max-width:575px)">
        <img 
            src="<?php echo esc_url( Doatkolom::url('assets/images/common/ghost.webp') ) ?>" 
            alt="empty" 
            class="w-full"
            width="670"
            height="369"
            loading="lazy"
        >
    </picture>
    <a 
        class="inline-flex gap-1 primary-btn-bg text-white mt-10 font-semibold px-10 py-4 text-base rounded-lg capitalize transition-opacity hover:opacity-95" 
        aria-label="visit doatkolom home" 
        href="<?php echo Doatkolom::site_url() ?>"
    >
        Go Back To Homepage
    </a>
</div>
<?php
    get_footer();
?>