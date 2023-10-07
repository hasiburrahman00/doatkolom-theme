<?php
/*
 * Template Name: X Currency
 */
use Doatkolom\App\View;

if (!defined('ABSPATH'))
    exit;

View::page_title('X-currency | DoatKolom');
get_header();

View::part('x-currency/hero');
view::part('x-currency/specific-price');
view::part('x-currency/geo-rules');
view::part('x-currency/unlimited-currency');
view::part('x-currency/switcher-template');
view::part('x-currency/customizer');
view::part('x-currency/target-audiance');

View::part('common/community');
get_footer();
?>