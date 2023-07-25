<?php 
/*
 * Template Name: Home
 * 
 */
use Doatkolom\App\View;
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

View::page_title('DoatKolom');
get_header();
?>
    <h1>Home page</h1>
<?php 
get_footer();
?>