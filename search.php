<?php
if (!defined('ABSPATH')) die('Direct access forbidden.');
get_header();
get_template_part( 'template-parts/breadcrumb');
?>
<section class="py-10 md:py-14">

    <div class="max-w-[1000px] px-5 mx-auto pb-8">
        <doatkolom-ajax-search 
            value="<?php echo esc_attr(isset($_GET['s']) ? $_GET['s'] : '') ?>"
            action="<?php echo esc_url(DOATKOLOM_SITE_URL) ?>" 
            class="flex-1">
        </doatkolom-ajax-search>
    </div>

    <main class="max-w-[1000px] px-5 mx-auto grid md:grid-cols-3 gap-8">
        <div class="md:col-span-2 grid gap-7">
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
                else: 
                    get_template_part('template-parts/empty-content');
                endif;

                get_template_part( 'template-parts/pagination' );
            ?>
        </div>
        <?php get_sidebar() ?>
    </main>

</section>
<?php 
get_footer();