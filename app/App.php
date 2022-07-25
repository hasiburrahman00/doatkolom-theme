<?php

namespace DoatKolom;

use DoatKolom\Core\Singleton;

if ( !defined( 'ABSPATH' ) ) {
    exit;
}

class App
{
    /**
     * @var array
     */
    public $settings = [];

    use Singleton;

    public function __construct()
    {
        $settings = get_option( Settings::SETTINGS_KEY );
        if ( !$settings ) {
            $settings = [];
        } else {
            $settings = unserialize( $settings );
        }

        $this->settings = $settings;
    }

    /**
     * @param $setting_name
     * @return mixed
     */
    public function getSetting( $setting_name )
    {
        return isset( $this->settings[$setting_name] ) ? $this->settings[$setting_name] : '';
    }
}
