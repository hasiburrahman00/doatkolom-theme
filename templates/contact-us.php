<?php 
/*
 * Template Name: Contact Us
 */
use Doatkolom\App\View;
if ( ! defined( 'ABSPATH' ) ) exit;

View::page_title('Contanct Us | Doatkolom');
get_header();

View::part("contact-us/contact-us");

View::part('common/community');
get_footer();
?>