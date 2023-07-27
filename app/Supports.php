<?php 
namespace Doatkolom\App;
use Doatkolom\Doatkolom;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class Supports {
    public function __construct()
    {
        $this->add_theme_supports();
        $this->add_text_domain();
        $this->add_menus();
        $this->disable();

    }

    private function add_theme_supports()
    {
        add_theme_support('post-formats', ['standard', 'image', 'video', 'audio', 'gallery', 'quote']);
        add_theme_support('automatic-feed-links');
        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');

        add_theme_support('align-wide');
        add_theme_support('editor-styles');
        add_theme_support('wp-block-styles');
        add_post_type_support( 'page', 'excerpt' );
        add_image_size( 'custom-post-featured-image', 648, 386, ['center', 'center'] );
        
    }

    private function add_text_domain()
    {
        load_theme_textdomain('doatkolom', Doatkolom::dir('languages'));
    }

    private function add_menus()
    {
        register_nav_menus([
            'primary' => esc_html__('Header Menu','doatkolom'),
            'company' => esc_html__('Company Menu', 'doatkolom'),
            'products' => esc_html__('Products Menu', 'doatkolom'),
            'supports' => esc_html__('Supports Menu', 'doatkolom'),
            'terms' => esc_html__('Terms Menu', 'doatkolom'),
        ]);
    }

    private function disable() 
    {
        // disable comments
        add_filter('comments_open', '__return_false');
    }
}