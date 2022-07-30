<?php 
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if( !is_front_page() ) {

    $word = 6;
    $seperator = '>';
    
    ?>
    
    <section class="bg-no-repeat bg-center <?php echo (has_post_thumbnail()) ? 'bg-cover' : 'bg-contain' ?>" id="doatkolom-breadcrumb">
        <div class="<?php echo (has_post_thumbnail() && is_single() ) ? 'bg-overlay text-white' : 'bg-transparent text-title' ?>  py-10 sm:py-16 md:py-24">
            <div class="max-w-screen-xl mx-auto px-5 space-y-3">
    
                <div class="grid <?php echo (has_post_thumbnail() && is_single()) ? 'grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-left' : 'grid-cols-1 text-center' ?>">
                    
                    <?php 
                        if ( has_post_thumbnail() && is_single() ) {
                            $breadcrumb_image = get_the_post_thumbnail_url(get_the_ID(), 'full');
                            ?>
                                <div>
                                    <picture>
                                        <img class="lazyload w-full max-h-72 rounded-md object-cover shadow-xl" data-src="<?php echo esc_attr($breadcrumb_image) ?>" alt="breadcrunb image">
                                    </picture>
                                </div>
                            <?php 
                        }
                    ?>
    
                    <div>
                        <h1 class="font-weight_tertiary mb-3 capitalize <?php echo is_single() ? 'text-2xl md:text-3xl md:leading-12 font-secondary' : 'text-3xl sm:text-4xl font-primary lg:text-6xl' ?>">
                            <?php 
                                if( is_page() ) {
                                    the_title();
                                }
                                elseif( is_single() ) {
                                    the_title();
                                }
                                elseif( is_archive() ) {
                                    the_archive_title();
                                } 
                                else {
                                    esc_html_e('Blog', 'doatkolom');
                                }
                            ?>
                        </h1>
    
                        <ol class="flex flex-wrap <?php echo has_post_thumbnail() && is_single() ? 'justify-start' : 'justify-center' ?> text-lg gap-x-2 font-secondary list-none">
                            <?php 
                            if ( !is_home() ) {
                                echo '<li class="mr-2"><a class="text-secondary no-underline hover:underline font-weight_primary hover:text-secondary" href="';
                                echo esc_url( get_home_url( '/' ) );
                                echo '">';
                                echo esc_html__( 'Home', 'doatkolom' );
                                echo "</a></li> " . esc_attr( $seperator );
                                if ( is_category() || is_single() ) {
                                    echo '<li>';
                                    $category	 = get_the_category();
                                    $post		 = get_queried_object();
                                    $postType	 = get_post_type_object( get_post_type( $post ) );
                                    if ( !empty( $category ) ) {
                                        echo esc_html( $category[ 0 ]->cat_name ) . '</li>';
                                    } else if ( $postType ) {
                                        echo esc_html( $postType->labels->singular_name ) . '</li>';
                                    }
                            
                                    if ( is_single() ) {
                                        echo esc_attr( $seperator ) . "  <li>";
                                        echo esc_html( $word ) != '' ? wp_trim_words( get_the_title(), $word, null ) : get_the_title();
                                        echo '</li>';
                                    }
                                } elseif ( is_page() ) {
                                    echo '<li>';
                                    echo esc_html( $word ) != '' ? wp_trim_words( get_the_title(), $word, null ) : get_the_title();
                                    echo '</li>';
                                }
                            }
                            
                            if ( is_tag() ) {
                                single_tag_title();
                            } elseif ( is_day() ) {
                                echo"<li>" . esc_html__( 'Blogs for', 'doatkolom' ) . " ";
                                the_time( 'F jS, Y' );
                                echo'</li>';
                            } elseif ( is_month() ) {
                                echo"<li>" . esc_html__( 'Blogs for', 'doatkolom' ) . " ";
                                the_time( 'F, Y' );
                                echo'</li>';
                            } elseif ( is_year() ) {
                                echo"<li>" . esc_html__( 'Blogs for', 'doatkolom' ) . " ";
                                the_time( 'Y' );
                                echo'</li>';
                            } elseif ( is_author() ) {
                                echo"<li>" . esc_html__( 'Author Blogs', 'doatkolom' );
                                echo'</li>';
                            } elseif ( isset( $_GET[ 'paged' ] ) && !empty( $_GET[ 'paged' ] ) ) {
                                echo "<li>" . esc_html__( 'Blogs', 'doatkolom' );
                                echo'</li>';
                            } elseif ( is_search() ) {
                                echo"<li>" . esc_html__( 'Search Result', 'doatkolom' );
                                echo'</li>';
                            } elseif ( is_404() ) {
                                echo"<li>" . esc_html__( '404 Not Found', 'doatkolom' );
                                echo'</li>';
                            }
                            ?>
                        </ol>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <?php
}

?>