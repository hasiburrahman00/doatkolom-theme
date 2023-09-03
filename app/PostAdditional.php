<?php 
namespace Doatkolom\App;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class PostAdditional {
    function __construct()
    {
        add_action('init', [$this, 'register_post_meta']);
    }

    public function register_post_meta()
    {
        register_post_meta( 'post', 'is_featured_post', array(
            'show_in_rest' => true,
            'single' => true,
            'type' => 'string',
        ) );
    }
}