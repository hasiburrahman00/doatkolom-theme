<?php 

if (!defined('ABSPATH')) die('Direct access forbidden.');
?>
<aside class="flex flex-col gap-6">
    <?php 
        get_template_part('template-parts/categories');
        get_template_part('template-parts/recent-posts');
    ?>
</aside>