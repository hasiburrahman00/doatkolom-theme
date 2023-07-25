<?php 
namespace Doatkolom\App;
use Doatkolom\Doatkolom;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class Assets {
    public function __construct()
    {
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'), 100);
        add_action('enqueue_block_editor_assets', array($this, 'enqueue_admin_scripts'));
        add_filter('tiny_mce_plugins', [$this, 'disable_emojis_tinymce']);
    }

    public function enqueue_scripts()
    {
        $this->enqueue_frontend_scripts();
        $this->remove_frontend_assets();
    }

    public function enqueue_admin_scripts()
    {
        $app = Doatkolom::require('build/app.asset.php');
        $dependencies = $app['dependencies'];
        $version = $app['version'];
    
        array_push( $dependencies, 'jquery' );

        wp_enqueue_script('doatkolom-admin-app', Doatkolom::url('build/app.js'), $dependencies, $version, false);
        wp_enqueue_style('doatkolom-admin-app', Doatkolom::url('build/app.css'), [], $version, false);
    }


    private function enqueue_frontend_scripts()
    {
        wp_enqueue_script('doatkolom-script', Doatkolom::url('dist/js/app.js'), array('jquery'), Doatkolom::version() , true);
        wp_enqueue_style('doatkolom-fonts', Doatkolom::url('dist/lib/fonts.css'), array(), Doatkolom::version() , 'all');
        wp_enqueue_style('doatkolom-style', Doatkolom::url('dist/css/app.css'), array('doatkolom-fonts'), Doatkolom::version() , 'all');
    }


    private function remove_frontend_assets()
    {

        if (!is_admin_bar_showing()) {
            wp_deregister_style('dashicons');
            wp_dequeue_style('dashicons');
        }

        wp_dequeue_style( 'classic-theme-styles' );
        wp_dequeue_style( 'wp-block-library' );
         //Disable emojis in WordPress
        remove_action('wp_head', 'print_emoji_detection_script', 7);
        remove_action('admin_print_scripts', 'print_emoji_detection_script');
        remove_action('wp_print_styles', 'print_emoji_styles');
        remove_filter('the_content_feed', 'wp_staticize_emoji');
        remove_action('admin_print_styles', 'print_emoji_styles');
        remove_filter('comment_text_rss', 'wp_staticize_emoji');
        remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
    }

    public function disable_emojis_tinymce($plugins)
    {
        if (is_array($plugins)) {
            return array_diff($plugins, array('wpemoji'));
        } else {
            return array();
        }
    }

}