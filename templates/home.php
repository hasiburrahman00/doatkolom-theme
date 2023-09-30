<?php 
/*
 * Template Name: Home
 */
use Doatkolom\App\View;
if ( ! defined( 'ABSPATH' ) ) exit;

View::page_title('DoatKolom');
get_header();

View::part('home/hero');
View::part('home/products');
view::part('home/support');
View::part('home/why-choose');
View::part('common/testimonial');
View::part('common/community');

get_footer();
?>