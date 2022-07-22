<?php

namespace Doatkolom;

use DoatKolom\Core\Api;
use DoatKolom\Core\Singleton;

class Settings extends Api
{
    const SETTINGS_KEY = 'doatkolom_settings';
    const GALLERY_KEY  = 'doatkolom_gallery';

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

    public function post_add_gallery()
    {
        try {
            $data        = $this->request->get_params();
            $image_id    = $data['image_id'];
            $gallery_ids = get_option( self::GALLERY_KEY );
            if ( !$gallery_ids ) {
                $gallery_ids = [];
            } else {
                $gallery_ids = unserialize( $gallery_ids );
            }
            $gallery_ids[] = $image_id;
            update_option( self::GALLERY_KEY, serialize( $gallery_ids ) );

            return [
                'message' => esc_html__( 'Gallery item added successfully!', 'doatkolom' ),
                'status'  => 'success'
            ];
        } catch ( \Exception $e ) {
            return [
                'message' => esc_html__( 'Something has wrong', 'doatkolom' ),
                'status'  => 'failed'
            ];
        }
    }

    public function post_update_gallery()
    {
        try {

            $data      = $this->request->get_params();
            $image_id  = $data['image_id'];
            $image_key = $data['image_key'];

            $gallery_ids = get_option( self::GALLERY_KEY );
            if ( !$gallery_ids ) {
                $gallery_ids = [];
            } else {
                $gallery_ids = unserialize( $gallery_ids );
            }
            $gallery_ids[$image_key] = $image_id;
            update_option( self::GALLERY_KEY, serialize( $gallery_ids ) );

            return [
                'message' => esc_html__( 'Gallery item updated successfully!', 'doatkolom' ),
                'status'  => 'success'
            ];
        } catch ( \Exception $e ) {
            return [
                'message' => esc_html__( 'Something has wrong', 'doatkolom' ),
                'status'  => 'failed'
            ];
        }
    }

    /**
     * @return mixed
     */
    public function get_galleries()
    {
        $data = $this->request->get_params();

        if ( isset( $data['page'] ) ) {
            $page = $data['page'];
        } else {
            $page = 1;
        }

        if ( isset( $data['per_page'] ) ) {
            $perpage = intval( $data['per_page'] );
            if ( $perpage > 100 ) {
                $perpage = 100;
            }
        } else {
            $perpage = 20;
        }

        $offset = ( $page - 1 ) * $perpage;

        $gallery_ids = get_option( self::GALLERY_KEY );
        if ( !$gallery_ids ) {
            $gallery_ids = [];
        } else {
            $gallery_ids = unserialize( $gallery_ids );
        }

        $total       = count( $gallery_ids );
        $gallery_ids = array_slice( $gallery_ids, $offset, $perpage );

        $gallery_items = [];

        foreach ( $gallery_ids as $key => $gallery_id ) {

            $gallery = [
                'image_key' => $offset + $key,
                'image_id'  => $gallery_id,
                'image_url' => ''
            ];
            $attachment = wp_get_attachment_image_src( $gallery_id, 'full' );

            if ( isset( $attachment[0] ) ) {
                $gallery['image_url'] = $attachment[0];
            }

            $gallery_items[] = $gallery;

        }
        return [
            'data' => [
                'items' => $gallery_items,
                'total' => $total
            ]
        ];
    }

    public function post_delete_gallery()
    {
        $data = $this->request->get_params();
        try {
            $image_key = $data['image_key'];

            $gallery_ids = get_option( self::GALLERY_KEY );
            if ( !$gallery_ids ) {
                $gallery_ids = [];
            } else {
                $gallery_ids = unserialize( $gallery_ids );
            }
            unset( $gallery_ids[$image_key] );
            update_option( self::GALLERY_KEY, serialize( array_values( $gallery_ids ) ) );

            return [
                'message' => esc_html__( 'Gallery item deleted successfully!', 'doatkolom' ),
                'status'  => 'success'
            ];
        } catch ( \Exception $e ) {
            return [
                'message' => esc_html__( 'Something has wrong', 'doatkolom' ),
                'status'  => 'failed'
            ];
        }
    }
}
