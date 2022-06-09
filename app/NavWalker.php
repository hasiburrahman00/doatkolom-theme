<?php 
namespace DoatKolom;

use Attribute;

if ( ! defined( 'ABSPATH' ) ) exit; 
class NavWalker extends \Walker_Nav_Menu {

    function start_lvl( &$output, $depth = 0, $args = null ) {
        $indent     = str_repeat("\t", $depth);
        $submenu    = ($depth > 0) ? 'sub-menu' : '';
        // dropdown menu ul
        $output    .= "\n$indent<ul class=\"dropdown-menu hidden z-10 lg:fixed list-none lg:bg-white pl-5 py-3 border-l-3 border-t-0 border-r-0 border-b-0 border-solid border-secondary lg:p-2 lg:w-48 lg:shadow-md lg:rounded-sm $submenu depth_$depth\">\n";
    }

    function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {

        $a_tag_class    = 'font-secondary text-xl sm:text-4xl lg:text-base text-white lg:text-primary no-underline font-bold hover:text-secondary ease-in duration-200 inline-block flex items-center';

        $arrow_icon     = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <mask id="mask0_377_1938" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <rect x="6.10352e-05" y="20" width="20" height="20" transform="rotate(-90 6.10352e-05 20)" fill="currentColor"/>
            </mask>
            <g mask="url(#mask0_377_1938)">
                <path d="M15.0001 8.49572L10.0001 13.5039L5.00006 8.49572L6.16673 7.32714L10.0001 11.1668L13.8334 7.32714L15.0001 8.49572Z" fill="currentColor"/>
            </g>
        </svg>';

        $indent         = ($depth) ? str_repeat("\t", $depth) : '';
        $li_attribute   = ''; 
        $class_names    = $value = '';

        $classes    = empty( $item->classes ) ? array() : (array) $item->classes;
        
        // dropdown menu container start
        $classes[]  = ($args->walker->has_children) ? 'dropdown': ''; 
        // dropdown menu container end

        $classes[]  = ($item->current || $item->current_item_anchestor) ? 'active' : '';
        // menu item li class start
        $classes[]  = 'p-2 inline-block cursor-pointer sm:my-3 lg:my-0 lg:block menu-item-' . $item->ID;
        // menu item li clss end

        if( $depth && $args->walker->has_children ) {
            $classes[] = 'dropdown-submenu';
        }

        $class_names = join( ' ' , apply_filters('nav_menu_css_class', array_filter( $classes ), $item, $args) );
        $class_names = ' class="' . esc_attr($class_names) . '"';
        $id          = apply_filters('nav_menu_item_id', 'menu-item-'.$item->ID, $item, $args);
        $id          = strlen($id) ? ' id="'. esc_attr($id) .'"' : '';

        $output .= $indent . '<li' . $id . $value . $class_names . $li_attribute . '>';

        $attributes = !empty( $item->attr_title ) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
        $attributes .= !empty( $item->target ) ? ' target="' . esc_attr($item->target) . '"' : '';
        $attributes .= !empty( $item->xfn ) ? ' rel="' . esc_attr($item->xfn) . '"' : '';
        $attributes .= !empty( $item->url ) ? ' href="' . esc_attr($item->url) . '"' : '';
        $attributes .= ( $args->walker->has_children ) ? ' class="dropdown-toggle pointer-events-none '.$a_tag_class.'"  data-toggle="dropdown"' : ' class="'.$a_tag_class.'"';

        $item_output = $args->before;
        $item_output .= '<a' . $attributes . '>';
        $item_output .= $args->link_before . apply_filters('the_title', $item->title, $item->ID) . $args->link_after;
        $item_output .= ($args->walker->has_children) ? ' <span class="caret inline-flex">'.$arrow_icon.'</span></a>': '</a>';
        $item_output .= $args->after; 

        $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
    }

    // function end_el() {
        
    // }

    // function end_lvl() {

    // }
}