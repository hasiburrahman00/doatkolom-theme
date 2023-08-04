<?php 
namespace Doatkolom\App;
use Doatkolom\Doatkolom;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class Assets {
    public function __construct()
    {
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'), 100);
        add_filter('tiny_mce_plugins', [$this, 'disable_emojis_tinymce']);
    }

    public function enqueue_scripts()
    {
        $this->enqueue_frontend_scripts();
        $this->remove_frontend_assets();
    }

    private function enqueue_frontend_scripts()
    {
        //script
        wp_enqueue_script('doatkolom-swiper', Doatkolom::url('assets/lib/js/swiper-bundle.min.js'), [], Doatkolom::version() , true);
        wp_enqueue_script('doatkolom-app', Doatkolom::url('assets/js/app.js'), array('jquery'), Doatkolom::version() , true);
        // style
        wp_enqueue_style('doatkolom-swiper', Doatkolom::url('assets/lib/css/swiper-bundle.min.css'), array(), Doatkolom::version() , 'all');
        wp_enqueue_style('doatkolom-fonts', Doatkolom::url('assets/css/fonts.css'), array(), Doatkolom::version() , 'all');
        wp_enqueue_style('doatkolom-app', Doatkolom::url('assets/css/app.css'), array('doatkolom-fonts'), Doatkolom::version() , 'all');
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