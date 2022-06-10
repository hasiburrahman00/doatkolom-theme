<?php 
function gutenberg_enqueue() {
    wp_enqueue_style('doatkolom-frontend', DOATKOLOM_BUILD . 'frontend.min.css', [], DOATKOLOM_VERSION, false);
    wp_enqueue_script('doatkolom-frontend', DOATKOLOM_BUILD . 'frontend.min.js', ['jquery'], DOATKOLOM_VERSION, false);
    wp_enqueue_script('doatkolom-blocks', DOATKOLOM_BUILD . 'gutenberg.min.js', ['jquery', 'wp-editor', 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-date', 'wp-hooks', 'wp-components', 'underscore'], DOATKOLOM_VERSION, false);

    wp_localize_script( 'doatkolom-blocks', 'doatkolom_object',
        array( 
            'ajaxurl'   => admin_url( 'admin-ajax.php' ),
            'img'       => DOATKOLOM_IMG,
        )
    );

    $spectral_regular = DOATKOLOM_FONT . 'Spectral-Regular.ttf';
	$spectral_bold	  = DOATKOLOM_FONT . 'Spectral-Bold.ttf';
	$abrilFatface	  = DOATKOLOM_FONT . 'AbrilFatface-Regular.ttf';

	$block_css = "
	    @font-face {
            font-family: 'Spectral';
            src:local('Spectral'),
                url('$spectral_regular') format('truetype');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
		}

		@font-face {
            font-family: 'Spectral';
            src: local('Spectral'),
                url('$spectral_bold') format('truetype');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
		}
		@font-face {
            font-family: 'Abril Fatface';
            src: local('Abril Fatface'),
                url('$abrilFatface') format('truetype');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
		}
	";
	wp_add_inline_style( 'doatkolom-frontend', $block_css ); 
}
add_action( 'enqueue_block_editor_assets', 'gutenberg_enqueue' );