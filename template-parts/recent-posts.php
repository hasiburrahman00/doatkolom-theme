<?php 
    if (!defined('ABSPATH')) die('Direct access forbidden.');
?>

<div class="p-4 sm:p-6 border border-solid border-border bg-white rounded-lg sticky top-20 w-full">
    <h2 class="font-primary text-black text-lg uppercase font-weight_tertiary mt-0 mb-3"><?php esc_html_e('Recent Posts', 'doatkolom') ?></h2>
    <ul class="list-none">
        <?php
        // Define our WP Query Parameters
        $the_query = new WP_Query( 'posts_per_page=6' ); ?>
          
        <?php
        // Start our WP Query
        while ($the_query -> have_posts()) : $the_query -> the_post();
        // Display the Post Title with Hyperlink
        ?>
          
        <li class="border-b border-solid border-border border-x-0 border-t-0 leading-3 last:border-b-0">
            <a class="font-secondary hover:text-primary transition duration-200 block py-1.5 text-base no-underline text-black" href="<?php the_permalink() ?>"><?php the_title(); ?></a>
        </li>
          
          
        <?php
        // Repeat the process and reset once it hits the limit
        endwhile;
        wp_reset_postdata();
        ?>
    </ul>
</div>