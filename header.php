<?php 
/**
 * 
 * The template for displaying the header
 * This is the template that displays all of the <head> section, opens the <body> tag and adds the site's header.
 * @package doatkolom
 * @since 1.0.0
 * @see https://developer.wordpress.org/reference/hooks/wp_body_open/ 
 * 
 */

use Doatkolom\NavWalker;
use Doatkolom\Icons;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

// load document head
get_template_part( 'templates/partials/document-open' );

if(has_custom_logo()):
    $custom_logo_id = get_theme_mod( 'custom_logo' );
    $site_logo_url = wp_get_attachment_image_url( $custom_logo_id , 'full' );
else:
    $site_logo_url = DOATKOLOM_IMG . 'doatkolom-logo-white.webp';
endif;


?>

<header class="fixed top-0 z-9999 w-full" data-sticky="yes" id="doatkolom-main-header">
    <nav>
        <div class="container max-w-screen-xl">
            <div class="flex justify-between items-center">

                <?php 
                /**
                 * 
                 * 
                 * Display Logo
                 * Here if logo does not set from customizer, a default will appear form theme file
                 * @package doatkolom 
                 * @since 1.0.0
                 */ 
                ?>

                <div class="flex-none doatkolom-logo">
                    <a href="<?php echo esc_url(home_url('/')); ?>">
                        <picture>
                            <img width="116" height="33" src="<?php echo esc_url($site_logo_url) ?>" alt="header white logo"/>
                        </picture>
                    </a>

                    <?php 
                    /**
                     * 
                     * 
                     * Display mobile hamburger icon
                     * @package doatkolom 
                     * @since 1.0.0
                     */ 
                    ?>
                    <div>
                        <i class="codiaum-icon-menu-9"></i>
                    </div>

                </div>

                <?php 
                /**
                 * 
                 * 
                 * Display wordpress menu here
                 * In order to modify dropdown and depth, modify the class NavWalker
                 * @package doatkolom 
                 * @since 1.0.0
                 */ 
                ?>

                <div class="flex-auto flex justify-center doatkolom-nav">
                    <?php
                        wp_nav_menu([
                            'menu'            => 'primary',
                            'theme_location'  => 'primary',
                            'menu_class'      => 'doatkolom-nav-menu',
                            'container_class' => 'doatkolom-nav-menu-container',
                            'items_wrap'      => '<ul id="doatkolom-nav-menu" class="%2$s">%3$s</ul>',
                            'depth'           => 3,
                            'walker'          => new NavWalker(),
                            'fallback_cb'     => false,
                        ]);
                    ?>
                </div>

            </div>

        </div>
    </nav>
</header>