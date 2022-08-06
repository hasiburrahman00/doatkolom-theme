<?php
get_header();
get_template_part( 'template-parts/breadcrumb');
if (!defined('ABSPATH')) die('Direct access forbidden.');
?>
<section class="py-10 md:py-14">
    
    <doatkolom-blog-nav class="max-w-screen-xl px-5 pb-8 block mx-auto">
        <doatkolom-ajax-search 
            value="<?php echo esc_attr(isset($_GET['s']) ? $_GET['s'] : '') ?>" 
            action="<?php echo esc_url(DOATKOLOM_SITE_URL) ?>" 
            class="flex-1">
        </doatkolom-ajax-search>
        <doatkolom-category-slider>
            <?php
                wp_list_categories([
                    'title_li' => '',
                    'show_count'=> false,
                ]);
            ?>
        </doatkolom-category-slider>
    </doatkolom-blog-nav>

    <main class="max-w-screen-xl px-5 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <?php 
            if( have_posts() ) :
                /**
                 * 
                 * Show post content
                 * 
                 */
                while ( have_posts() ) : the_post();
                    get_template_part( 'template-parts/archive-article');
                endwhile;
            endif;
        ?>
    </main>

    <div class="flex sm:justify-center px-5">
        <?php 
            get_template_part( 'template-parts/pagination' );
        ?>
    </div>

</section>
<?php 
get_footer();