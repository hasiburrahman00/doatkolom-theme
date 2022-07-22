<?php
use DoatKolom\AutoLoader;

/**
 * 
 * 
 * 
 * GLOBAL Constant for doatkolom theme 
 * 
 * @since 1.0.0
 */ 

define( 'DOATKOLOM_HOME_URL', home_url('/'));
define( 'DOATKOLOM_SITE_URL', get_site_url() . '/' );
define( 'DOATKOLOM_THEME_URI', get_template_directory_uri() );
define( 'DOATKOLOM_THEME_DIR', get_template_directory() );
define( 'DOATKOLOM_INCLUDE_DIR', DOATKOLOM_THEME_DIR . '/includes/' );
define( 'DOATKOLOM_IMG', DOATKOLOM_THEME_URI . '/assets/img/' );
define( 'DOATKOLOM_BLOCKS', DOATKOLOM_THEME_URI . '/blocks/' );
define( 'DOATKOLOM_BUILD', DOATKOLOM_THEME_URI . '/build/' );
define( 'DOATKOLOM_FONT', DOATKOLOM_THEME_URI . '/assets/fonts/' );
define( 'DOATKOLOM_VERSION', '1.0.0' );
define( 'DOATKOLOM_MINWP_VERSION', '5.0' );

define( 'CSS_VARIABLES', "
    :root {
        --doatkolom-primary-color: #003646;
        --doatkolom-primary-color-80: #003646cc;
        --doatkolom-primary-color-60: #00364699;
        --doatkolom-primary-color-20: #00364633;
        --doatkolom-primary-color-10: #0036461a;
        --doatkolom-secondary-color: #16AACA;
        --doatkolom-white-color: #ffffff;
        --doatkolom-white-color-90: #ffffffe6;
        --doatkolom-gray-100-color: #f3f4f6;
        --doatkolom-gray-200-color: #e5e7eb;
        --doatkolom-gray-300-color: #d1d5db;
        --doatkolom-gray-400-color: #9ca3af;
        --doatkolom-gray-500-color: #E6EBED;
        --doatkolom-slate-300-color: #cbd5e1;
        --doatkolom-slate-200-color: #e2e8f0;
        --doatkolom-slate-100-color: #f1f5f9;
        --doatkolom-teal-100-color: #E7F4F6;
        --doatkolom-blue-600-color: #2563eb;
        --doatkolom-green-600-color: #16a34a;
        --doatkolom-red-600-color: #dc2626;
        --doatkolom-paste-green-color: #035769;
        --doatkolom-paste-green-400-color: #C1F1FF;
        --doatkolom-paste-blue-400-color: #3EB9D3;
        --doatkolom-paste-blue-100-color: #F8FEFF;
        --doatkolom-primary-blue-100-color: #F3FDFF;
    }
");

/**
 * 
 * 
 * 
 * Get the logo of the institution 
 * 
 */ 
if(has_custom_logo()):
    $custom_logo_id = get_theme_mod( 'custom_logo' );
    $site_logo_url = wp_get_attachment_image_url( $custom_logo_id , 'full' );
else:
    $site_logo_url = DOATKOLOM_IMG . 'institution-logo.webp';
endif;

define( 'DOATKOLOM_LOGO', $site_logo_url );

/*
 * Set up our auto loading class and mapping our namespace to the app directory.
 *
 * The autoloader follows PSR4 autoloading standards so, provided StudlyCaps are used for class, file, and directory
 * names, any class placed within the app directory will be autoloaded.
 *
 * i.e; If a class named SomeClass is stored in app/SomeDir/SomeClass.php, there is no need to include/require that file
 * as the autoloader will handle that for you.
 */
require get_stylesheet_directory() . '/app/AutoLoader.php';
$loader = new AutoLoader();
$loader->register();
$loader->addNamespace( 'DoatKolom', get_stylesheet_directory() . '/app' );

remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);

require get_stylesheet_directory() . '/includes/theme-support.php';
require get_stylesheet_directory() . '/includes/scripts-and-styles.php';
require get_stylesheet_directory() . '/includes/block-scripts.php';
require get_stylesheet_directory() . '/includes/admin-menu.php';