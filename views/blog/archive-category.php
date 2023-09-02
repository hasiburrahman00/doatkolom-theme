<?php 
    if (!defined('ABSPATH')) exit;

     // show categories
     $limit = 20; // false | number
     $category_list = get_the_category();
     $current_cat = get_query_var('cat');

     // is All category active
     $is_all_active = $current_cat == 0 ? true : false;

     if( $limit === false ) {
         $limit = count( $category_list );
     }
?>
<?php if( count($category_list) > 0 ): ?>
    <div class="swiper doatkolom-archive-category-swiper overflow-hidden pt-2 md:pt-6 w-full">
        <div class="swiper-wrapper">
            <div 
                class="swiper-slide"
                data-active="<?php echo esc_attr( $is_all_active ? 'true' : 'false' ) ?>"
                data-index="0"
            >
                <a 
                    class="transition-colors py-3 border-b-2 border-solid font-semibold text-sm inline-block <?php echo esc_attr( $is_all_active ? 'text-secondary border-[#00AB55]' : 'text-[#637381] border-transparent' ) ?> hover:text-secondary" 
                    href="<?php echo get_permalink( get_option( 'page_for_posts' ) ); ?>"
                >
                    All
                </a>
            </div>
            <?php 
                foreach( $category_list as $k => $cat ):
                    $cat_id = $cat->cat_ID;
                    // is current category active
                    $is_current_cat_active = $current_cat == $cat_id ? true : false;

                    
                    if( $k < $limit ) {
                        ?>
                        <div 
                            class="swiper-slide"
                            data-active="<?php echo esc_attr( $is_current_cat_active ? 'true' : 'false' ) ?>"
                            data-index="<?php echo esc_attr( $k + 1 ) ?>"
                        >
                            <a  class="transition-colors py-3 border-b-2 border-solid font-semibold border-[#00AB55] text-sm inline-block <?php echo esc_attr( $is_current_cat_active ? 'text-secondary border-[#00AB55]' : 'text-[#637381] border-transparent' ) ?> hover:text-secondary" href="<?php echo esc_url(get_category_link($cat->term_id)) ?>">
                                <?php 
                                    echo esc_html( $cat->name );
                                ?>
                            </a>
                        </div>
                        <?php 
                    } 
                endforeach;
            ?>
        </div>
    </div>
<?php endif; ?>