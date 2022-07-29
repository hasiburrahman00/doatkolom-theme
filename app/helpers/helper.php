<?php

use DoatKolom\App;

if ( !defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * @param $setting_name
 */
function get_doatkolom_theme_setting( $setting_name )
{
    return doatkolom_app()->getSetting( $setting_name );
}

function doatkolom_app(): App
{
    return App::instance();
}
