<?php 
use Doatkolom\App\View;
add_filter( 'body_class', function( $classes ) {
	return array_merge( $classes, ['bg-[#F6F6F8] has-white-header'] );
} );

View::page_title('Blog');
get_header();
View::part('blog/archive-banner');

get_footer();
?>