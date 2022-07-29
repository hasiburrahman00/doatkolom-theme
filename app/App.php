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
        $setting_fields = Settings::instance()->setting_fields();

        foreach ( $setting_fields as $pages ) {
            foreach ( $pages as $tab ) {
                if ( isset( $tab['fields'][$setting_name]['default'] ) ) {
                    return $tab['fields'][$setting_name]['default'];
                }
            }
        }
        return '';
    }

    /**
     * @return mixed
     */
    public function getSettings()
    {
        return $this->settings;
    }

    public function css_variables()
    {
        $data = Settings::instance()->developer_page();
        unset( $data['doatkolom_auth_tab'] );

        // colors variable
        $colors = $data['theme_color_tab']['fields'];
        $fonts  = $data['font_family_tab']['fields'];

        $primary_font_url   = $fonts['primary_font_url']['default'];
        $secondary_font_url = $fonts['secondary_font_url']['default'];

        $varString = '';
        foreach ( $colors as $name => $value ) {
            $varString .= "--" . $name . ":" . $value['default'] . ";\n";
        }

        unset( $fonts['primary_font_url'] );
        unset( $fonts['secondary_font_url'] );

        foreach ( $fonts as $name => $value ) {
            $varString .= "--" . $name . ":" . $value['default'] . ";\n";
        }

        return "
            " . $primary_font_url . "\n
            " . $secondary_font_url . "\n
            :root{\n" . $varString . "}\n
        ";
    }
}
