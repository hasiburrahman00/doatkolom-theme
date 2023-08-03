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
View::part('home/why-choose');
View::part('home/community');

get_footer();
?>