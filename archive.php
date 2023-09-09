<?php 
use Doatkolom\App\View;
// body class
add_filter( 'body_class', function( $classes ) {
	return array_merge( $classes, ['bg-[#F6F6F8] has-white-header'] );
} );

// header and page title
View::page_title('Archive');
get_header();

// content
View::part('blog/archive-banner');
View::part('blog/posts');
View::part('common/community');

// footer
get_footer();
?>