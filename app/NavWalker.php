<?php 
namespace Doatkolom\App;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

class NavWalker extends \Walker_Nav_Menu
{

    function start_lvl(&$output, $depth = 0, $args = null)
    {
        $indent     = str_repeat("\t", $depth);
        $submenu    = ($depth > 0) ? 'sub-menu' : '';
        // dropdown menu ul
        $output    .= "\n$indent<ul class=\"dropdown $submenu depth_$depth\">\n";
    }

    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
    {

        $a_tag_class    = '';

        $arrow_icon     = '<svg width="16" height="22" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" fill="currentColor"/></svg>';

        $indent         = ($depth) ? str_repeat("\t", $depth) : '';
        $li_attribute   = '';
        $class_names    = $value = '';

        $classes    = empty($item->classes) ? array() : (array) $item->classes;

        // dropdown menu container start
        $classes[]  = ($args->walker->has_children) ? 'has-dropdown-menu' : '';
        // dropdown menu container end

        $classes[]  = ($item->current || $item->current_item_anchestor) ? 'active' : '';
        // menu item li class start
        $classes[]  = 'chaty-theme-nav__li li-' . $item->ID;
        // menu item li clss end

        if ($depth && $args->walker->has_children) {
            $classes[] = 'dropdown-submenu';
        }

        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = ' class="' . esc_attr($class_names) . '"';
        $id          = apply_filters('nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args);
        $id          = strlen($id) ? ' id="' . esc_attr($id) . '"' : '';

        $output .= $indent . '<li' . $id . $value . $class_names . $li_attribute . '>';

        $attributes = !empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
        $attributes .= !empty($item->target) ? ' target="' . esc_attr($item->target) . '"' : '';
        $attributes .= !empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) . '"' : '';
        $attributes .= !empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';
        $attributes .= ($args->walker->has_children) ? ' class="dropdown-toggle ' . $a_tag_class . '"  data-toggle="dropdown"' : ' class="' . $a_tag_class . '"';

        $item_output = $args->before;
        $item_output .= '<a' . $attributes . '>';
        $item_output .= $args->link_before . apply_filters('the_title', $item->title, $item->ID) . $args->link_after;
        $item_output .= ($args->walker->has_children) ? ' <span class="caret inline-flex">' . $arrow_icon . '</span></a>' : '</a>';
        $item_output .= $args->after;

        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }

    // function end_el() {

    // }

    // function end_lvl() {

    // }
}