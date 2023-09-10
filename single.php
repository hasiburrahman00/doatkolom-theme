<?php 

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
get_header();
?>
<main class="pt-24 lg:pt-32 pb-10">
    <h1>single page</h1>
    <?php the_content() ?>
</main>
<?php
get_footer();
?>