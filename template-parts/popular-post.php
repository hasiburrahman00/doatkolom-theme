<?php 

use Doatkolom\View;

?>

<div class="grid sm:grid-cols-2 gap-6">
<?php 
    $orig_post = $post;
    global $post;
    $categories = get_the_category($post->ID);
    
    if ($categories) {
    $category_ids = array();
    
    foreach($categories as $individual_category) $category_ids[] = $individual_category->term_id;
    
    $args=array(
        'meta_key'          => 'post_views_count', // set custom meta key
        'post__not_in'      => array($post->ID),
        'orderby'           => 'meta_value_num',
        'posts_per_page'    => 6, // Number of popular posts that will be shown.
        'ignore_sticky_posts'=>1
    );

    $my_query = new wp_query( $args );

    if( $my_query->have_posts() ) {
        while( $my_query->have_posts() ) {
        $my_query->the_post();?>

        <div class="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 space-x-3 sm:space-x-0 lg:space-x-3 items-center">

            <figure class="relative group"> 
                <?php the_post_thumbnail( 'full', array( 'class' => 'img-responsive' ) ); ?>
                <figcaption>
                    <a 
                        class="absolute top-0 left-0 w-full h-full bg-doatkolom-black-800/80 flex justify-center items-center text-white opacity-0 group-hover:opacity-100"
                        href="<?php the_permalink(); ?>"><span class="dashicons dashicons-plus"></span>
                    </a>
                </figcaption>
            </figure>  
            
            <div>
                <h3 class="sm:mt-3 lg:mt-0 font-lato text-base text-doatkolom-black-800 font-semibold leading-2 hover:text-doatkolom-purple-800">
                    <a href="<?php the_permalink(); ?>">
                        <?php 
                            $title  = the_title('','',false);
                            if(strlen($title) > 40):
                                echo trim(substr($title, 0, 32)).'...';
                            else:
                                echo esc_html($title);
                            endif;
                        ?>
                    </a>    
                </h3>

                <p class="font-lato text-sm text-doatkolom-black-800 mt-1"><?php echo View::getPremioPostViews( get_the_ID() ); ?> </p>
            </div>

            <div class="clearfix"></div>
        </div>
        <?php
        }
    }
    
    else {
            echo'<div>';
            echo'<p>No posts were found</p>';
            echo' </div>';
        }
    }

    $post = $orig_post;
    wp_reset_postdata(); 
?>
</div>