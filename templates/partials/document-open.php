<?php 
	$banner_glob_image = esc_url( DOATKOLOM_IMG . 'home-banner-bg-full.webp' );
	$banner_main_image = esc_url( DOATKOLOM_IMG . 'home-banner.webp' ); 

	$variables = "
		:root {
			--banner_glob_image : url($banner_glob_image);
			--banner_main_image	: url($banner_main_image);
		}
	";
?>

<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="shortcut icon" href="<?php echo esc_attr( DOATKOLOM_IMG . 'doatkolom-favicon.png' ) ?>" type="image/x-icon">

	<style>
		/* Lato Light */
		@font-face {
		font-family: "Lato";
		src:local('Lato'),
			url("<?php echo DOATKOLOM_FONT ?>Lato-Light.ttf") format('truetype');
		font-weight: 300;
		font-style: normal;
		font-display: swap;
		}


		/* Lato regular */
		@font-face {
		font-family: "Lato";
		src: local('Lato'),
			url("<?php echo DOATKOLOM_FONT ?>Lato-Regular.ttf") format('truetype');
		font-weight: 400;
		font-style: normal;
		font-display: swap;
		}


		/* Lato bold */
		@font-face {
		font-family: "Lato";
		src: local('Lato'),
			url('<?php echo DOATKOLOM_FONT ?>Lato-Bold.ttf') format('truetype');
		font-weight: 700;
		font-style: normal;
		font-display: swap;
		}

		/* Lato Black */
		/* @font-face {
		font-family: "Lato";
		src:
			local('Lato'), 
			url('Lato-Black.ttf') format('truetype');
		font-weight: 900;
		font-style: normal;
		font-display: swap;
		} */
		body { overflow-x: hidden }
		<?php echo $variables ?>
	</style>
	<?php wp_head() ?>
</head>
<body <?php body_class() ?>>
