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

/**
 * 
 * 
 * implement lazy load support  
 */ 
function wh_alter_attachment_image($attr) {

    if( isset($attr['src']) ) {
        $attr['data-src'] = $attr['src'];
        $attr['class'] = $attr['class'] . ' lazyload';
        // unset($attr['src']);
    }
    return $attr;
}

add_filter('wp_get_attachment_image_attributes', 'wh_alter_attachment_image');


/**
 * 
 * 
 * lazy load blog post image 
 * @source https://gist.github.com/ahmadassaf/9332846 
 * 
 */ 
function faster_replace_img_src($content){
	$html = preg_replace_callback('#(<img\s[^>]*src)="([^"]+)"#',"callback_img", $content );
	return $html;
}

function callback_img($match) {
	list( , $img, $src) = $match;
	return "$img=\"$preloading_image\" data-src=\"$src\" ";
}

/* Replace the source attribute for images in the post to activate lazy loading */
function replace_img_src($content){
	if (!is_feed()) {

		$content = mb_convert_encoding($content, 'HTML-ENTITIES', "UTF-8");
		if ($content) {
			$document = new DOMDocument();
			libxml_use_internal_errors(true);
			$document->loadHTML(utf8_decode($content));
			libxml_use_internal_errors(false);
			libxml_clear_errors();

			$imgs = $document->getElementsByTagName('img');
			if ($imgs) {
				foreach($imgs as $key=>$value) {
					if ($key !== 0) {
						$img_src = $value->getAttribute('src');
						if ( !$value->hasAttribute("width") || !$value->hasAttribute("height")) {
							$value->setAttribute('width', '543px');
							$value->setAttribute('height', '248px');
						}

						$value->setAttribute('data-src', $img_src);
                        $value->setAttribute('class', 'lazyload');
						$value->removeAttribute('src');
						$value->setAttribute("onError","$(this).parents('.image').length !== 0 ? $(this).parents('.image').css('display','none') : $(this).css('display','none');");
					} else $value->setAttribute('data-loaded', 'true');
				}
			}

			$html = $document->saveHTML();
			return $html;
		}
	}
}

add_filter('the_content', 'replace_img_src');