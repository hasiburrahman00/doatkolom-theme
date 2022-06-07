<?php

add_action( 'wp_enqueue_scripts', function () {

	wp_enqueue_style('doatkolom-frontend', DOATKOLOM_BUILD . 'frontend.min.css', [], null, false);
	wp_enqueue_script('doatkolom-frontend', DOATKOLOM_BUILD . 'frontend.min.js', ['jquery'], null, false);
	/**
	 * 
	 * 
	 * register these scripts and stylesheets into home template
	 * 
	 */
	if( is_page_template('templates/doatkolom-app.php') ) {		
		wp_enqueue_script('doatkolom-app', 'http://103.110.113.196/doatkolom/wp-content/themes/institution-website/build/home.min.js', ['jquery'], null, false);
	}

	if( is_page_template('templates/doatkolom-teachers.php') ) {		
		wp_enqueue_script('doatkolom-teacher', 'http://103.110.113.196/doatkolom/wp-content/themes/institution-website/build/teachers.min.js', ['jquery'], null, false);
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