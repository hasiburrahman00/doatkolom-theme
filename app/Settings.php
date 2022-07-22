<?php

namespace Doatkolom;

use DoatKolom\Core\Api;
use DoatKolom\Core\Singleton;

class Settings extends Api
{
    const SETTINGS_KEY = 'doatkolom_settings';

    use Singleton;

    public function config()
    {
        $this->prefix = 'settings';
    }

    public function get_setting_fields()
    {
        $settings = get_option( self::SETTINGS_KEY );
        if ( !$settings ) {
            $settings = [];
        } else {
            $settings = unserialize( $settings );
        }

        $this->settings = $settings;

        return [
            [
                'title' => 'Settings Page',
                'tabs'  => $this->settings_page_tabs( $settings )
            ]
        ];
    }

    /**
     * @param $settings
     */
    private function settings_page_tabs( $settings )
    {
        return [
            [
                'title'         => esc_html__( 'Site Settings', 'doatkolom' ),
                'tutorial_link' => '',
                'fields'        => [
                    [
                        'id'        => 'institution_logo',
                        'type'      => 'media',
                        'label'     => esc_html__( 'Institution Logo', 'doatkolom' ),
                        'default'   => isset( $settings['institution_logo'] ) ? $settings['institution_logo'] : '',
                        'media_url' => $this->get_attachment_url( 'institution_logo' )
                    ]
                ]
            ],
            [
                'title'         => esc_html__( 'Information', 'doatkolom' ),
                'tutorial_link' => '',
                'fields'        => [
                    [
                        'id'      => 'institution_type',
                        'type'    => 'text',
                        'label'   => esc_html__( 'Institution Type', 'doatkolom' ),
                        'default' => isset( $settings['institution_type'] ) ? $settings['institution_type'] : ''
                    ]
                ]
            ],
            [
                'title'         => esc_html__( 'Quick Menu URL', 'doatkolom' ),
                'tutorial_link' => '',
                'fields'        => [
                    [
                        'id'      => 'notice_board',
                        'type'    => 'text',
                        'label'   => esc_html__( 'Notice Board', 'doatkolom' ),
                        'default' => isset( $settings['notice_board'] ) ? $settings['notice_board'] : ''
                    ]
                ]
            ]
        ];
    }

    public function post_save_settings()
    {
        $data = $this->request->get_params();
        unset( $data['action'] );
        $data = serialize( $data );
        update_option( self::SETTINGS_KEY, $data );

        return [
            'message' => esc_html__( 'Settings saved successfully!', 'doatkolom' ),
            'status'  => 'success'
        ];
    }

    /**
     * @param $input_id
     * @return mixed
     */
    private function get_attachment_url( $input_id )
    {
        if ( isset( $this->settings[$input_id] ) ) {
            $attachment_id = $this->settings[$input_id];
            $attachment    = wp_get_attachment_image_src( $attachment_id, 'full' );

            if ( $attachment ) {
                return $attachment[0];
            }
        }
        return false;
    }
}
