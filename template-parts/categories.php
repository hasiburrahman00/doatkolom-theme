<?php 
    if (!defined('ABSPATH')) die('Direct access forbidden.');
?>

<div class="p-4 sm:p-6 border border-solid border-border bg-white rounded-lg w-full">
    <h2 class="font-primary text-black text-lg uppercase font-weight_tertiary mt-0 mb-3">
        <?php esc_html_e('Categories', 'doatkolom') ?>
    </h2>
    <ul class="list-none doatkolom-category">
        <?php 
            wp_list_categories([
                'title_li' => '',
                'show_count'=> true,
            ]);
        ?>
    </ul>
</div>