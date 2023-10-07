<?php
/*
 * Template Name: Privacy Policy
 * 
 */
use Doatkolom\App\View;

if (!defined('ABSPATH'))
    exit; // Exit if accessed directly

View::page_title('Privacy Policy | Doatkolom');
get_header();

view::part('privacy-policy/policies');

get_footer();