<?php 

use Doatkolom\View;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

$word = 6;
$seperator = '>';

$page_bg = DOATKOLOM_IMG . 'breadcrumb-bg.webp';

if( is_single() ) {
    $page_bg = DOATKOLOM_IMG . 'home-banner.webp';
}

?>

<section class="doatkolom-breadcrumb <?php echo is_single() ? 'single' : '' ?>" style="background: url(<?php echo esc_url( $page_bg ) ?>);">
    <div class="container max-w-screen-lg text-center text-white font-lato">
        <h1 class="md:leading-10 sm:text-4xl text-2xl mb-2 sm:mb-6 capitalize">
            <?php 
                if( is_page() ) {
                    the_title();
                }
                elseif( is_single() ) {
                    ?>
                     <div class="w-500 mx-auto border-4 border-white rounded-md">
                        <?php View::thumbnail(['class' => 'w-full']) ?>
                     </div>
                    <?php 
                }
                elseif( is_archive() ) {
                    the_archive_title();
                } 
                else {
                    echo 'Blog';
                }
            ?>
        </h1>
        <ol class="flex mt-3 sm:mt-0 flex-wrap justify-center text-base space-x-2">
            <?php 
            if ( !is_home() ) {
                echo '<li class="mr-2"><a href="';
                echo esc_url( get_home_url( '/' ) );
                echo '">';
                echo esc_html__( 'Home', 'space-theme' );
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
                echo"<li>" . esc_html__( 'Blogs for', 'space-theme' ) . " ";
                the_time( 'F jS, Y' );
                echo'</li>';
            } elseif ( is_month() ) {
                echo"<li>" . esc_html__( 'Blogs for', 'space-theme' ) . " ";
                the_time( 'F, Y' );
                echo'</li>';
            } elseif ( is_year() ) {
                echo"<li>" . esc_html__( 'Blogs for', 'space-theme' ) . " ";
                the_time( 'Y' );
                echo'</li>';
            } elseif ( is_author() ) {
                echo"<li>" . esc_html__( 'Author Blogs', 'space-theme' );
                echo'</li>';
            } elseif ( isset( $_GET[ 'paged' ] ) && !empty( $_GET[ 'paged' ] ) ) {
                echo "<li>" . esc_html__( 'Blogs', 'space-theme' );
                echo'</li>';
            } elseif ( is_search() ) {
                echo"<li>" . esc_html__( 'Search Result', 'space-theme' );
                echo'</li>';
            } elseif ( is_404() ) {
                echo"<li>" . esc_html__( '404 Not Found', 'space-theme' );
                echo'</li>';
            }
            ?>
        </ol>
    </div>
</section>