<?php

if ( ! defined( 'ABSPATH' ) ) exit;

function get_doatkolom_theme_setting( $setting_name ) {
	return \DoatKolom\App::instance()->getSetting( $setting_name );
}