<?php 

use DoatKolom\Settings;

// print the markup for the page
function page_callback_function() {
    echo '<div id="doatkolom-admin-root"></div>';
}

// add menu to the wordpress dashboard
function doatkolom_theme_dashboard_menu() {
    // base64 svg logo
    $logo = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHZlcnNpb249IjEuMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwMC4wMDAwMDAgMTAwMC4wMDAwMDAiCiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDEwMDAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik00ODI1IDk0NTQgYy02MjkgLTM4IC0xMjA0IC0xODMgLTE3MjMgLTQzNSAtNDcyIC0yMjggLTgyOSAtNDc5Ci0xMTk2IC04MzggLTI1MSAtMjQ3IC00MzUgLTQ3MCAtNjE4IC03NTIgLTEyMyAtMTg4IC0xODAgLTI4OCAtMjg3IC01MTEgLTIyMAotNDUzIC0zNTggLTk0NyAtNDE3IC0xNDg4IC0yNCAtMjEzIC0yNCAtNjU3IDAgLTg3MCA1OSAtNTQxIDE5NyAtMTAzNSA0MTcKLTE0ODggMTc0IC0zNjAgMzUxIC02MzYgNjA3IC05NDUgMTAzIC0xMjUgMzYzIC0zODggNDk2IC01MDQgNjEzIC01MjkgMTMyOQotODcxIDIxMjggLTEwMTggNzgzIC0xNDMgMTU5NCAtNzEgMjM1NCAyMTAgNzg1IDI5MCAxNDg4IDgxNyAyMDA4IDE1MDQgMzQ4CjQ1OSA2MDUgOTk2IDc1MSAxNTY2IDIwMSA3ODcgMTg5IDE1NjggLTM2IDIzNTAgLTE3MiA2MDEgLTQ1MyAxMTI3IC04NjcgMTYyOAotMTAzIDEyNSAtMzYzIDM4OCAtNDk2IDUwNCAtNzA0IDYwNyAtMTU0NiA5NjkgLTI0ODUgMTA2OCAtMTM1IDE1IC01MjIgMjYKLTYzNiAxOXogbTY4NSAtMTI4IGM1MTkgLTYyIDk2OCAtMTkzIDE0MjUgLTQxNiAxMjQ2IC02MDcgMjE0MiAtMTc5MiAyMzc5Ci0zMTQ1IDUxIC0yOTIgNjAgLTQwOSA2MSAtNzYwIDAgLTM1NiAtNyAtNDU1IC01NSAtNzQzIC0yNjUgLTE1ODMgLTE0MDIKLTI5MDIgLTI5NDAgLTM0MDkgLTI2NSAtODggLTYxNiAtMTYyIC05MjUgLTE5NSAtMTU5IC0xNyAtNzAxIC0xNyAtODYwIDAKLTMwOSAzMyAtNjYwIDEwNyAtOTI1IDE5NSAtMTUzOCA1MDggLTI2NzUgMTgyNiAtMjk0MCAzNDA5IC00OCAyODggLTU1IDM4NwotNTUgNzQzIDEgMjU1IDUgMzYzIDE5IDQ3NSA2NiA1MzQgMTkzIDk2NyA0MTYgMTQyNSA1MTggMTA1OSAxNDI3IDE4NTMgMjU1NAoyMjMwIDI3MyA5MSA2NDYgMTY5IDkyNiAxOTQgNjkgNiAxMzkgMTMgMTU1IDE1IDc3IDEwIDYzOCAtMyA3NjUgLTE4eiIvPgo8cGF0aCBkPSJNNDgzMCA5MjEzIGMtNjA2IC0zNCAtMTE3OCAtMTg5IC0xNzE2IC00NjcgLTEwNjcgLTU1MSAtMTg1MSAtMTU0MQotMjE0NCAtMjcwNiAtMTkzIC03NjYgLTE2NSAtMTU5NyA3OCAtMjMzNSAxMDkgLTMzMCAyNzggLTY4NyA0NTYgLTk2MyBsNDcKLTcyIDQ2IDMyIGM1NSAzNyAxNzkgOTEgMjQ4IDEwNiAyOCA3IDk4IDE2IDE1OCAyMiA1OSA2IDExMyAxMyAxMjAgMTYgOCAzIC02CjI0IC00MCA1OSAtMzkgNDAgLTU2IDY3IC02OSAxMTAgLTM1IDEyMyAyMiAyNTEgMTM4IDMwOSBsNTIgMjYgNDUyIDAgNDUzIDAKMTYgMjIgYzkgMTMgNDQgNzAgNzkgMTI4IDk1IDE2MCAxMjIgMjAyIDIzMCAzNjUgbDEwMCAxNDkgMiAxNTEgYzEyIDY5NyAzMzEKMTM1OSA4ODUgMTgzOCA2OTMgNjAwIDE3MjIgOTI4IDMxMTggOTk3IDI5OSAxNSA0OTEgMTMgNDkxIC0zIDAgLTI3IC03MyAtMjQ2Ci0xMzAgLTM4OCAtMjU4IC02NDQgLTczMiAtMTMyOCAtMTEzNSAtMTYzNiBsLTUwIC0zOCAtNDQwIDEgYy0yNDIgMCAtNTE2IDYKLTYwOSAxMiAtOTQgNiAtMTcxIDEwIC0xNzMgOCAtOCAtNyAxMTMgLTY4IDIwMiAtMTAzIDUwIC0xOSAxNTMgLTUyIDIzMCAtNzMKMTM1IC0zNyA0ODIgLTExMCA1MjQgLTExMCAxMiAwIDIxIC00IDIxIC05IDAgLTIyIC0zMTAgLTI0NSAtNDkwIC0zNTMgLTQ1NQotMjczIC05ODQgLTQ1NSAtMTQxMiAtNDg4IC0xMjcgLTkgLTI2OCAtNCAtMjY4IDEwIDAgMjEgMjE0IDM1MCAzNDkgNTM1IDMwMQo0MTMgNzMzIDkxNiAxMTIyIDEzMDQgbDE3MyAxNzMgLTg5IC01NyBjLTQ3NyAtMzA3IC03OTggLTU2OCAtMTE5MiAtOTY3IC0yMDYKLTIwOSAtNDA4IC00NDQgLTU4MyAtNjc4IC01MSAtNjkgLTEwNSAtMTQxIC0xMjAgLTE2MCAtMzEgLTQwIC0yNDUgLTM1NyAtMjc3Ci00MTAgLTEyIC0xOSAtNDYgLTc1IC03NiAtMTI1IGwtNTUgLTkwIDQ1NiAtNSBjMzI1IC00IDQ2NSAtOCA0ODQgLTE3IDQ3IC0yMQoxMTAgLTg2IDEzNCAtMTM4IDQ4IC0xMDEgMjEgLTIzMSAtNjEgLTMwNCAtMTkgLTE3IC0zMSAtMzIgLTI2IC0zNSA1IC0zIDM5Ci0xMCA3NyAtMTYgMjQwIC0zNSAyNzEgLTQyIDM0NiAtNzUgMjI3IC05OCAzOTcgLTI5OSA0NTggLTU0MSAyMCAtNzggMjEgLTEwNQoxOCAtNzQzIC0zIC01OTQgLTEgLTY2MSAxMyAtNjYxIDggMCA2NyA3IDEzMCAxNSA0OTUgNjUgOTIxIDE5NiAxMzY0IDQyMCA3MDIKMzU0IDEyNjQgODcwIDE2OTEgMTU1MCA5MSAxNDcgMjU4IDQ3OCAzMjMgNjQ1IDI5NCA3NDggMzcyIDE1MjUgMjMxIDIzMjAKLTE0NiA4MjEgLTU2MiAxNjEzIC0xMTY1IDIyMTUgLTg0MSA4NDIgLTIwMTcgMTI5NCAtMzE5NSAxMjI4eiIvPgo8L2c+Cjwvc3ZnPgo=";
    
    // add doatkolom main menu
    add_menu_page( 
        'DoatKolom', 
        'DoatKolom', 
        'edit_posts', 
        'doatkolom-theme-settings', 
        'page_callback_function', 
        $logo,
        '58.7'
    );
}


/**
 * 
 * 
 * add necessary javascript, css for the dashboard pages 
 */ 
function admin_enqueue_script_fn( $hook ) {
    if( $hook === 'toplevel_page_doatkolom-theme-settings' ) {
        
        wp_enqueue_media();
        wp_enqueue_script('doatkolom-admin', DOATKOLOM_BUILD . 'admin.min.js', ['jquery', 'wp-editor', 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-date', 'wp-hooks', 'wp-components', 'underscore'], DOATKOLOM_VERSION, false);
        wp_enqueue_style('doatkolom-frontend', DOATKOLOM_BUILD . 'frontend.min.css', [], DOATKOLOM_VERSION, false);
        wp_add_inline_style( 'doatkolom-frontend', Settings::css_variables() );
        wp_localize_script( 'doatkolom-admin', 'doatkolom_object',
            array( 
                'ajaxurl'       => admin_url( 'admin-ajax.php' ),
                'blocks'        => DOATKOLOM_BLOCKS,
                'img'           => DOATKOLOM_IMG,
                'wp_json'       => get_rest_url( '', '' ),
                'api_version'   => 'v1',
                'prefix'        => DOATKOLOM_POST_TYPE,
                'nonce'         => wp_create_nonce( 'wp_rest' ),
            )
        );
    }
}

add_action('admin_menu', 'doatkolom_theme_dashboard_menu');
add_action('admin_enqueue_scripts', 'admin_enqueue_script_fn');