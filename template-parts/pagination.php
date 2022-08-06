<?php

global $wp_query;

// stop execution if there's only 1 page
if ( $wp_query->max_num_pages <= 1 ){
    return;
}

$paged	 = get_query_var( 'paged' ) ? absint( get_query_var( 'paged' ) ) : 1;
$max	 = intval( $wp_query->max_num_pages );

// add current page to the array
if ( $paged >= 1 ){
    $links[] = $paged;
}

// add the pages around the current page to the array
if ( $paged >= 3 ) {
    $links[] = $paged - 1;
    $links[] = $paged - 2;
}

if ( ( $paged + 2 ) <= $max ) {
    $links[] = $paged + 2;
    $links[] = $paged + 1;
}

echo '<ul class="list-none flex flex-wrap items-center mt-10 md:mt-14 gap-3">' . "\n";

// previous Post Link
if ( get_previous_posts_link() ){
    printf( '<li class="pagination-btn">%s</li>' . "\n", get_previous_posts_link( 'Prev' ) );
}

// link to first page, plus ellipses if necessary
if ( !in_array( 1, $links ) ) {
    $class = 1 == $paged ? ' class="bg-white text-gray-3"' : '';
    printf( '<li><a class="%s inline-block rounded-lg text-black no-underline text-base font-secondary py-1.5 px-4 bg-white border-border transition duration-200 ease-linear border border-solid hover:bg-primary hover:text-white hover:border-primary" href="%s">%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( 1 ) ), '1' );

    if ( !in_array( 2, $links ) )
        echo '<li class="pagination-dots ">&hellip;&hellip;</li>';
}

// link to current page, plus 2 pages in either direction if necessary
sort( $links );
foreach ( (array) $links as $link ) {
    $class = $paged == $link ? 'bg-primary text-white border-primary' : 'bg-white text-black border-border';
    printf( '<li><a class="%s inline-block rounded-lg no-underline text-base font-secondary py-1.5 px-4 transition duration-200 ease-linear border border-solid hover:bg-primary hover:text-white hover:border-primary" href="%s">%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( $link ) ), $link );
}

// link to last page, plus ellipses if necessary
if ( !in_array( $max, $links ) ) {
    if ( !in_array( $max - 1, $links ) )
        echo '<li class="pagination-dots">&hellip;</li>' . "\n";

    $class = $paged == $max ? 'bg-primary text-white border-primary' : 'bg-white text-black border-border';
    printf( '<li><a class="%s inline-block rounded-lg no-underline text-base font-secondary py-1.5 px-4 transition duration-200 ease-linear border border-solid hover:bg-primary hover:text-white hover:border-primary" href="%s" >%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( $max ) ), $max );
}

// next Post Link
if ( get_next_posts_link() ){
    printf( '<li class="pagination-btn">%s</li>' . "\n", get_next_posts_link( 'Next' ) );
}


echo '</ul>' . "\n";