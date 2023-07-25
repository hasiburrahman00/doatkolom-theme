<?php 
    use Doatkolom\Doatkolom;
    if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
    <!-- preload fonts -->
    <link rel="preload" href="<?php echo Doatkolom::url('assets/fonts/Inter-Regular.woff2')  ?>" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="<?php echo Doatkolom::url('assets/fonts/Inter-SemiBold.woff2')  ?>" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="<?php echo Doatkolom::url('assets/fonts/Inter-Bold.woff2')  ?>" as="font" type="font/woff2" crossorigin>
    <!-- favicon -->
    <link rel="shortcut icon" href="<?php echo Doatkolom::url('assets/images/logos/favicon.png')  ?>" type="image/x-icon">
    <!-- theme script -->
    <?php wp_head() ?>
</head>

<body <?php body_class('font-inter') ?>>