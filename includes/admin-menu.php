<?php 
add_action('admin_menu', 'doatkolom_theme_style');

function page_callback_function() {
    echo '<div id="doatkolom-admin-root"></div>';
}

function doatkolom_theme_style() { 

    add_menu_page( 
        'DoatKolom', 
        'DoatKolom', 
        'edit_posts', 
        'doatkolom-theme-settings', 
        'page_callback_function', 
        'dashicons-media-spreadsheet' 
    );
}

function admin_enqueue_script_fn( $hook ) {
    if( $hook === 'toplevel_page_doatkolom-theme-settings' ) {
        wp_enqueue_style('doatkolom-frontend', DOATKOLOM_BUILD . 'frontend.min.css', [], DOATKOLOM_VERSION, false);
        wp_add_inline_style( 'doatkolom-frontend', CSS_VARIABLES );
        wp_enqueue_script('doatkolom-admin', DOATKOLOM_BUILD . 'admin.min.js', ['jquery', 'wp-editor', 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-date', 'wp-hooks', 'wp-components', 'underscore'], DOATKOLOM_VERSION, false);
        
        wp_localize_script( 'doatkolom-admin', 'doatkolom_object',
            array( 
                'ajaxurl'   => admin_url( 'admin-ajax.php' ),
                'blocks'    => DOATKOLOM_BLOCKS,
                'img'       => DOATKOLOM_IMG
            )
        );
    }
}

add_action('admin_enqueue_scripts', 'admin_enqueue_script_fn');
  