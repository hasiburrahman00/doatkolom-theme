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
    <link rel="shortcut icon" href="<?php echo get_site_icon_url() ?>" type="image/x-icon">
    <?php wp_head() ?>
</head>

<body <?php body_class() ?>>

<h1 class="hello">Hello</h1>