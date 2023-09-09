<?php 
use Doatkolom\App\View;
// body class

if( have_posts() ) {
	add_filter( 'body_class', function( $classes ) {
		return array_merge( $classes, ['bg-[#F6F6F8] has-white-header'] );
	} );
} else {
	add_filter( 'body_class', function( $classes ) {
		return array_merge( $classes, ['has-white-header'] );
	} );
}

// header and page title
View::page_title('Search');
get_header();

// content
if( have_posts() ) {
	View::part('blog/archive-banner');
}
View::part('blog/search');
View::part('common/community');

// footer
get_footer();
?>