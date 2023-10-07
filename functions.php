<?php 
namespace Doatkolom;
use Doatkolom\App\Supports;
use Doatkolom\App\Assets;
use Doatkolom\App\PostAdditional;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

require_once 'vendor/autoload.php';
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

new Doatkolom();
