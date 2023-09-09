<?php
use Doatkolom\App\Icons;

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

echo '<ul class="flex flex-wrap items-center gap-1">' . "\n";

// previous Post Link
if ( get_previous_posts_link() ){
    ob_start();
    ?>
        <span class="text-secondary w-10 h-10 rounded-full hover:bg-secondary/10 transition-colors duration-200 inline-flex items-center justify-center">
            <?php Icons::angelLeft(); ?>
        </span>
    <?php 
    $icon = ob_get_contents();
    ob_end_clean();
    printf( '<li>%s</li>' . "\n", get_previous_posts_link( $icon ) );
}

// link to first page, plus ellipses if necessary
if ( !in_array( 1, $links ) ) {
    $class = 1 == $paged ? ' class="bg-premio-black-800 text-white"' : '';

    printf( '<li><a class="%s text-secondary w-10 h-10 rounded-full hover:bg-secondary/10 transition-colors duration-200 inline-flex items-center justify-center" href="%s">%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( 1 ) ), '1' );

    if ( !in_array( 2, $links ) )
        echo '<li class="pagination-dots">&hellip;&hellip;</li>';
}

// link to current page, plus 2 pages in either direction if necessary
sort( $links );
foreach ( (array) $links as $link ) {
    $class = $paged == $link ? 'bg-secondary/10' : '';
    printf( '<li><a class="%s text-secondary w-10 h-10 rounded-full hover:bg-secondary/10 transition-colors duration-200 inline-flex items-center justify-center" href="%s">%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( $link ) ), $link );
}

// link to last page, plus ellipses if necessary
if ( !in_array( $max, $links ) ) {
    if ( !in_array( $max - 1, $links ) )
        echo '<li class="pagination-dots">&hellip;</li>' . "\n";

    $class = $paged == $max ? 'bg-secondary/10' : '';
    printf( '<li><a class="%s text-secondary w-10 h-10 rounded-full hover:bg-secondary/10 transition-colors duration-200 inline-flex items-center justify-center" href="%s" >%s</a></li>' . "\n", $class, esc_url( get_pagenum_link( $max ) ), $max );
}

// next Post Link
if ( get_next_posts_link() ){
    ob_start();
    ?>
        <span class="text-secondary w-10 h-10 rounded-full hover:bg-secondary/10 transition-colors duration-200 inline-flex items-center justify-center">
            <?php Icons::angelRight(); ?>
        </span>
    <?php 
    $icon = ob_get_contents();
    ob_end_clean();

    printf( '<li>%s</li>' . "\n", get_next_posts_link( $icon ) );
}


echo '</ul>' . "\n";