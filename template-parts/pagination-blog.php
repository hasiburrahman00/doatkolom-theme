
  
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

echo '<ul class="flex mt-16 flex-wrap items-center space-x-1 space-y-1 sm:space-x-3">' . "\n";

// previous Post Link
if ( get_previous_posts_link() ){
    printf( '<li class="text-doatkolom-black-800 font-lato text-base font-bold flex items-center border-2 px-3 py-1 hover:bg-doatkolom-black-800 hover:border-doatkolom-black-800 hover:text-white">%s</li>' . "\n", get_previous_posts_link( 'Prev' ) );
}

// link to first page, plus ellipses if necessary
if ( !in_array( 1, $links ) ) {
    $class = 1 == $paged ? ' class="bg-doatkolom-black-800 text-white"' : '';

    printf( '<li><a class="%s w-9 h-9 font-bold rounded-md text-center leading-9 inline-block ease-linear duration-200 hover:bg-doatkolom-black-800 hover:text-white" href="%s">%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( 1 ) ), '1' );

    if ( !in_array( 2, $links ) )
        echo '<li class="pagination-dots">&hellip;&hellip;</li>';
}

// link to current page, plus 2 pages in either direction if necessary
sort( $links );
foreach ( (array) $links as $link ) {
    $class = $paged == $link ? 'bg-doatkolom-black-800 text-white' : '';
    printf( '<li><a class="%s w-9 h-9 font-bold rounded-md text-center leading-9 inline-block ease-linear duration-200 hover:bg-doatkolom-black-800 hover:text-white" href="%s">%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( $link ) ), $link );
}

// link to last page, plus ellipses if necessary
if ( !in_array( $max, $links ) ) {
    if ( !in_array( $max - 1, $links ) )
        echo '<li class="pagination-dots">&hellip;</li>' . "\n";

    $class = $paged == $max ? 'bg-doatkolom-black-800 text-white' : '';
    printf( '<li><a class="%s w-9 h-9 font-bold rounded-md text-center leading-9 inline-block ease-linear duration-200 hover:bg-doatkolom-black-800 hover:text-white" href="%s" >%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( $max ) ), $max );
}

// next Post Link
if ( get_next_posts_link() ){
    

    printf( '<li class="text-doatkolom-black-800 font-lato text-base font-bold flex items-center border-2 px-3 py-1 hover:bg-doatkolom-black-800 hover:border-doatkolom-black-800 hover:text-white">%s</li>' . "\n", get_next_posts_link( 'Next' ) );
}


echo '</ul>' . "\n";