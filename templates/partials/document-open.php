<?php 
	$favicon = DOATKOLOM_LOGO;
	if( !empty( get_doatkolom_theme_setting('website_favicon')) ) {
		$favicon = wp_get_attachment_url( get_doatkolom_theme_setting('website_favicon') );
	}
?>
<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="description" content="<?php echo esc_html(get_doatkolom_theme_setting('site_description')) ?>">
	<meta name="keywords" content="<?php echo esc_html(get_doatkolom_theme_setting('site_keywords')) ?>">
	<title><?php echo esc_html(get_doatkolom_theme_setting('site_title')) ?> | <?php echo esc_html(get_doatkolom_theme_setting('site_description')) ?></title>
	<link rel="shortcut icon" href="<?php echo esc_url( $favicon ) ?>" type="image/x-icon">
	<style>
		@font-face {
			font-family: "Shurjo";
			src:local('Shurjo'),
				url("<?php echo esc_url(DOATKOLOM_FONT) . 'ShurjoWeb_400.woff2' ?>") format('truetype');
			font-weight: 400;
			font-style: normal;
			font-display: swap;
		}
		@font-face {
			font-family: "Shurjo";
			src: local('Shurjo'),
				url("<?php echo esc_url(DOATKOLOM_FONT) . 'ShurjoWeb_700.woff2' ?>") format('truetype');
			font-weight: 700;
			font-style: normal;
			font-display: swap;
		}
	</style>
	<?php wp_head() ?>
</head>
<body <?php body_class() ?>>
