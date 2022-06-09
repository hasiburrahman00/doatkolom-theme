<?php 
/**
 * 
 * The template for displaying the header
 * This is the template that displays all of the <head> section, opens the <body> tag and adds the site's header.
 * @package doatkolom
 * @since 1.0.0
 * @see https://developer.wordpress.org/reference/hooks/wp_body_open/ 
 * 
 */


if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

// load document head
get_template_part( 'templates/partials/document-open' );
get_template_part( 'template-parts/header', 'top');
get_template_part( 'template-parts/header', 'default');
get_template_part( 'template-parts/desktop-quick', 'menu');