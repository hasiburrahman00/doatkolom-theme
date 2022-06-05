<?php

add_action( 'wp_enqueue_scripts', function () {

	
	/**
	 * 
	 * 
	 * register these scripts and stylesheets into home template
	 * 
	 */
	if( 
		is_page_template('templates/home.php') ||
		is_single() || 
		is_404()
	) {
		wp_enqueue_style('doatkolom-simple', DOATKOLOM_BUILD . 'doatkolom-home.min.css', [], null, false);
		wp_enqueue_script('doatkolom-simple', DOATKOLOM_BUILD . 'doatkolom-home.min.js', ['jquery'], null, false);
	}

	/**
	 * 
	 * load scripts and stylesheet into product pages 
	 * 
	 */ 
	if( 
		is_page_template('templates/result-wp.php')
	) {
		wp_enqueue_style('doatkolom-product', DOATKOLOM_BUILD . 'doatkolom-product.min.css', [], null, false);
		wp_enqueue_script('doatkolom-product', DOATKOLOM_BUILD . 'doatkolom-product.min.js', ['jquery'], null, false);
	}

	/**
	 * 
	 * 
	 * load into blog archive, autor, search 
	 */ 
	if( 
		is_home() || 
		is_author() ||
		is_category() ||
		is_tag() ||
		is_search()
	) {
		wp_enqueue_style('doatkolom-blog', DOATKOLOM_BUILD . 'doatkolom-blog.min.css', [], null, false);
		wp_enqueue_script('doatkolom-blog', DOATKOLOM_BUILD . 'doatkolom-blog.min.js', ['jquery'], null, false);
	}


	/**
	 * 
	 * add difer keyword into js file 
	 * 
	 */ 
	function defer_parsing_of_js(  $tag, $handle, $src  ) {
		if ( is_user_logged_in() ) return $tag; //don't break WP Admin
		if ( FALSE === strpos( $tag, '.js' ) ) return $tag;
		// if ( strpos( $tag, 'jquery.js' ) ) return $tag;

		return str_replace( ' src', ' defer src', $tag );
	}

	add_filter( 'script_loader_tag', 'defer_parsing_of_js', 10, 3 );

}, 100 );