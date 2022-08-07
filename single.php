<?php
if (!defined('ABSPATH')) die('Direct access forbidden.');
get_header();
get_template_part( 'template-parts/breadcrumb');
?>
<section class="py-10 md:py-14">
    <main class="max-w-screen-xl px-5 mx-auto grid md:grid-cols-3 gap-8">
        <article id="post-<?php the_ID(); ?>" <?php post_class('doatkolom-blog-post md:col-span-2 grid gap-7'); ?>>
            <?php the_content();?>
        </article>
        <?php get_sidebar() ?>
    </main>
</section>
<?php 
get_footer();