<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="shortcut icon" href="<?php echo esc_attr( DOATKOLOM_IMG . 'doatkolom-favicon.png' ) ?>" type="image/x-icon">

	<style>
		@font-face {
		font-family: 'Spectral';
		src:local('Spectral'),
			url("<?php echo DOATKOLOM_FONT ?>Spectral-Regular.ttf") format('truetype');
		font-weight: 400;
		font-style: normal;
		font-display: swap;
		}

		@font-face {
		font-family: 'Spectral';
		src: local('Spectral'),
			url("<?php echo DOATKOLOM_FONT ?>Spectral-Bold.ttf") format('truetype');
		font-weight: 700;
		font-style: normal;
		font-display: swap;
		}
		@font-face {
		font-family: 'Abril Fatface';
		src: local('Abril Fatface'),
			url('<?php echo DOATKOLOM_FONT ?>AbrilFatface-Regular.ttf') format('truetype');
		font-weight: 400;
		font-style: normal;
		font-display: swap;
		}
	</style>
	<?php wp_head() ?>
</head>
<body <?php body_class() ?>>
