<?php 
function gutenberg_enqueue() {
    wp_enqueue_script('doatkolom-frontend', DOATKOLOM_BUILD . 'frontend.min.js', ['jquery'], null, false);
    wp_enqueue_script('doatkolom-blocks', DOATKOLOM_BUILD . 'gutenberg.min.js', ['jquery', 'wp-editor', 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-date', 'wp-hooks', 'wp-components', 'underscore'], null, false);
}
add_action( 'enqueue_block_editor_assets', 'gutenberg_enqueue' );