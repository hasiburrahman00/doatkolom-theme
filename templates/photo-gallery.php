<?php
/*
 * Template Name: DoatKolom Photo Gallery
 * 
 */
get_header();
get_template_part( 'template-parts/breadcrumb');
the_content();
?>

<div class="px-5 max-w-screen-xl mx-auto py-20">
    <div id="doatkolom-photo-gallery-root" class="grid grid-cols-3 gap-5"></div>
</div>

<?php get_footer();