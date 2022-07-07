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

get_template_part( 'templates/partials/document-open' ); 
/**
 * 
 * website header top: it contains email, login button and notice board button, this part remain visible after 768px screen
 * 
 */
get_template_part( 'template-parts/header', 'top');
/**
 * 
 * 
 * this is for the primary navigation menu 
 * NOTE: make sure 'desktop-quick' must is visible and remains right after the 'header-default' template
 */
get_template_part( 'template-parts/header', 'default');
get_template_part( 'template-parts/desktop-quick', 'menu');