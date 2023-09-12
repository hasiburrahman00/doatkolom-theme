<?php 
use Doatkolom\App\View;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

add_filter( 'body_class', function( $classes ) {
	return array_merge( $classes, ['bg-[#F6F6F8] has-white-header'] );
} );

get_header();

View::part('blog/single-banner');
?>
<main class="pt-14 pb-20">
    <div class="container px-10">
        <div class="grid grid-cols-[1fr_365px] gap-10">
            <div>
                <?php the_content() ?>
            </div>
            <aside>
                <?php echo do_shortcode('[tocb]') ?>
            </aside>
        </div>
    </div>
</main>
<?php 
View::part('common/community');
get_footer();
?>