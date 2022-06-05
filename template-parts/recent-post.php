<?php 

use Doatkolom\View;

?>

<div>
<?php 
    $orig_post = $post;
    global $post;
    $categories = get_the_category($post->ID);
    
    if ($categories) {
    $category_ids = array();
    
    foreach($categories as $individual_category) $category_ids[] = $individual_category->term_id;
    
    $args=array(
        'category__in'      => $category_ids,
        'post__not_in'      => array($post->ID),
        'posts_per_page'    => 3, // Number of related posts that will be shown.
        'ignore_sticky_posts'=>1
    );

    $my_query = new wp_query( $args );

    if( $my_query->have_posts() ) {
        while( $my_query->have_posts() ) {
        $my_query->the_post();?>

        <div class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 space-x-3 md:space-x-0 lg:space-x-3 items-center mb-6">

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
                <h3 class="sm:mt-2 lg:mt-0 font-lato text-base text-doatkolom-black-800 font-semibold leading-2 hover:text-doatkolom-purple-800">
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