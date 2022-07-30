<?php

add_action( 'wp_enqueue_scripts', function () {

	wp_enqueue_style('doatkolom-frontend', DOATKOLOM_BUILD . 'frontend.min.css', [], DOATKOLOM_VERSION, false);
	wp_enqueue_script('doatkolom-frontend', DOATKOLOM_BUILD . 'frontend.min.js', ['jquery'], DOATKOLOM_VERSION, false);
	wp_add_inline_style( 'doatkolom-frontend', doatkolom_app()->css_variables() );
	
	wp_localize_script( 'doatkolom-frontend', 'doatkolom_object',
        array( 
			'wp_json'       => get_rest_url( '', '' ),
			'api_version'   => 'v1',
			'prefix'        => DOATKOLOM_POST_TYPE,
        )
    );

	if( is_page_template('templates/photo-gallery.php') && false ) {	
		wp_enqueue_style('doatkolom-venobox', DOATKOLOM_THEME_URI . '/lib/venobox.min.css', [], DOATKOLOM_VERSION, false);	
		wp_enqueue_script('doatkolom-venobox', DOATKOLOM_THEME_URI . '/lib/venobox.min.js', ['jquery'], DOATKOLOM_VERSION, false);
	}

	if( is_page_template('templates/doatkolom-app.php') ) {		
		wp_enqueue_script('doatkolom-app', DOATKOLOM_BUILD . 'app.min.js', ['jquery'], DOATKOLOM_VERSION, false);
	}

	wp_dequeue_style( 'global-styles' );

	/**
	 * 
	 * 
	 * 
	 * 
	 * adding dynamic css as internal file. This css get loads into theme head part
	 * 
	 */
	$breadcrumb_image = DOATKOLOM_IMG . 'breadcrumb.webp';

	if ( has_post_thumbnail() ) {
		$breadcrumb_image = get_the_post_thumbnail_url(get_the_ID(), 'full');
	}

	$breadcrumb_css = "
		#doatkolom-breadcrumb {
			background-image: url('$breadcrumb_image');
			background-color: var(--doatkolom_primary_light_color);
		}
	";
	wp_add_inline_style( 'doatkolom-frontend', $breadcrumb_css ); 

	/**
	 * 
	 * 
	 * 
	 * 
	 * 
	 * add difer keyword into js file 
	 * 
	 * 
	 */ 
	function defer_parsing_of_js(  $tag, $handle, $src  ) {
		if ( is_user_logged_in() ) return $tag; //don't break WP Admin
		if ( FALSE === strpos( $tag, '.js' ) ) return $tag;
		// if ( strpos( $tag, 'jquery.js' ) ) return $tag;

		return str_replace( ' src', ' defer src', $tag );
	}

	add_filter( 'script_loader_tag', 'defer_parsing_of_js', 10, 3 );

	// remove these scripts and styles
	if( is_page() ) {
		wp_dequeue_style( 'wp-block-library' ); // Wordpress core
		wp_dequeue_style( 'wp-block-library-theme' );
	}
		
	//Disable emojis in WordPress
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
	
	add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
	function disable_emojis_tinymce( $plugins ) {
		if ( is_array( $plugins ) ) {
			return array_diff( $plugins, array( 'wpemoji' ) );
		} else {
			return array();
		}
	}

}, 100 );
