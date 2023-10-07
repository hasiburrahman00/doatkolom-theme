<?php
/*
 * Template Name: About Us
 */
use Doatkolom\App\View;

if (!defined('ABSPATH'))
    exit;

View::page_title('About Us | DoatKolom');
get_header();

view::part('about-us/hero');
view::part('about-us/about');
view::part('about-us/core-value');
view::part('about-us/our-team');

View::part('common/community');
get_footer();
?>