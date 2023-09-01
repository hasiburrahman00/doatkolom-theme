<?php 
    if (!defined('ABSPATH')) exit;

     // show categories
     $limit = 10; // false | number
     $category_list = get_the_category();

     if( $limit === false ) {
         $limit = count( $category_list );
     }
?>
<?php if( count($category_list) > 0 ): ?>
    <div class="flex items-center gap-6 flex-wrap pt-6">
        <?php 
            foreach( $category_list as $k => $cat ):
                ?>
                    <a 
                        class="transition-colors py-3 border-b font-semibold border-[#00AB55] text-base inline-block text-[#637381] hover:text-secondary" 
                        href="<?php echo get_permalink( get_option( 'page_for_posts' ) ); ?>"
                    >
                        All
                    </a>
                <?php 
                if( $k < $limit ) {
                    ?>
                    <a  class="transition-colors py-3 border-b font-semibold border-[#00AB55] text-base inline-block text-[#637381] hover:text-secondary" href="<?php echo esc_url(get_category_link($cat->term_id)) ?>">
                        <?php 
                            echo esc_html( $cat->name );
                        ?>
                    </a>
                    <?php 
                } 
            endforeach;
        ?>
    </div>
<?php endif; ?>