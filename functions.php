<?php 
namespace Doatkolom;
use Doatkolom\App\AutoLoader;
use Doatkolom\App\Supports;
use Doatkolom\App\Assets;
use Doatkolom\App\PostAdditional;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class Doatkolom {
    public function __construct() {
        add_action( 'after_setup_theme', array( $this, 'after_setup_theme' ) );
    }

    public static function version()
    {
        return '0.0.1';
    }

    public static function site_url()
    {
        return home_url('/');
    }

    public static function url($path = '')
    {
        return get_template_directory_uri() . '/' . ltrim( $path, '/' );
    }

    public static function dir($path = '')
    {
        return get_template_directory() . DIRECTORY_SEPARATOR . $path;
    }
    
    public static function require($path = '')
    {
        return require( get_template_directory() . DIRECTORY_SEPARATOR . $path );
    }

    public function after_setup_theme() {
        new Supports();
        new Assets();
        new PostAdditional();
    }

    public static function sign_in_url() {
        return '#';
    }
}

/*
 * Set up our auto loading class and mapping our namespace to the app directory.
 *
 * The autoloader follows PSR4 autoloading standards so, provided StudlyCaps are used for class, file, and directory
 * names, any class placed within the app directory will be autoloaded.
 *
 * i.e; If a class named SomeClass is stored in app/SomeDir/SomeClass.php, there is no need to include/require that file
 * as the autoloader will handle that for you.
 */
require Doatkolom::dir('app/AutoLoader.php');
$loader = new AutoLoader();
$loader->register();
$loader->addNamespace( 'Doatkolom\App', Doatkolom::dir('app') );


new Doatkolom();