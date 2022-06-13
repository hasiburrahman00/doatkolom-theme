<?php 

add_theme_support( 'post-formats', ['standard', 'image', 'video', 'audio', 'gallery', 'quote'] );
add_theme_support( 'automatic-feed-links' );
add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );

add_theme_support( 'align-wide' );
add_theme_support( 'editor-styles' );
add_theme_support( 'wp-block-styles' );
add_theme_support( 'woocommerce' );
add_theme_support( 'wc-product-gallery-zoom' );
add_theme_support( 'wc-product-gallery-lightbox' );
add_theme_support( 'wc-product-gallery-slider' );

add_theme_support(
    'custom-logo',
    array(
        'height'      => 100,
        'width'       => 350,
        'flex-height' => true,
        'flex-width'  => true,
    )
);

add_theme_support(
    'html5',
    array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    )
);

/**
 * 
 * 
 * @since 1.0.0 
 * Theme custom support
 * 
 */ 
load_theme_textdomain( 'doatkolom', DOATKOLOM_THEME_DIR . '/languages' );
set_post_thumbnail_size( 750, 465, ['center', 'center'] );
add_image_size( 'doatkolom-small', 320, 200, ['center', 'center'] );

/**
 * 
 *  
 * Register menu
 */ 
register_nav_menus([
    'primary' => esc_html__('Header Menu', 'doatkolom'),
    'secondary' => esc_html__('Footer Menu', 'doatkolom'),
]);