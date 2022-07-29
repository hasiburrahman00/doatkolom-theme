<?php
use DoatKolom\AutoLoader;
use DoatKolom\Settings;
use DoatKolom\SettingsApi;

/**
 *
 * GLOBAL Constant for doatkolom theme
 *
 * @since 1.0.0
 */

define( 'DOATKOLOM_POST_TYPE', 'doatkolom-theme' );
define( 'DOATKOLOM_HOME_URL', home_url( '/' ) );
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


/*
 * Set up our auto loading class and mapping our namespace to the app directory.
 *
 * The autoloader follows PSR4 autoloading standards so, provided StudlyCaps are used for class, file, and directory
 * names, any class placed within the app directory will be autoloaded.
 *
 * i.e; If a class named SomeClass is stored in app/SomeDir/SomeClass.php, there is no need to include/require that file
 * as the autoloader will handle that for you.
 */
include_once get_stylesheet_directory() . '/app/AutoLoader.php';
include_once get_stylesheet_directory() . '/app/helpers/helper.php';
$loader = new AutoLoader();
$loader->register();
$loader->addNamespace( 'DoatKolom', get_stylesheet_directory() . '/app' );
$loader->addNamespace( 'DoatKolom\Core', get_stylesheet_directory() . '/core' );
SettingsApi::instance();

$site_logo_url = Settings::instance()->get_attachment_url('institution_logo');

define( 'DOATKOLOM_LOGO', $site_logo_url );

remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );

include_once get_stylesheet_directory() . '/includes/theme-support.php';
include_once get_stylesheet_directory() . '/includes/scripts-and-styles.php';
include_once get_stylesheet_directory() . '/includes/block-scripts.php';
include_once get_stylesheet_directory() . '/includes/admin-menu.php';

// error_log(print_r(doatkolom_app()->css_variables(), true));

// get_rest_url( '', '' ) . 'doatkolom-theme/v1/settings/setting_fields';

// delete_option(\DoatKolom\Settings::GALLERY_KEY);