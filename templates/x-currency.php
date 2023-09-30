<?php 
/*
 * Template Name: X Currency
 */
use Doatkolom\App\View;
if ( ! defined( 'ABSPATH' ) ) exit;

View::page_title('X-currency | DoatKolom');
get_header();

View::part('x-currency/hero');


View::part('common/community');
get_footer();
?>