<?php

namespace DoatKolom;

use DoatKolom\Core\Api;
use DoatKolom\Core\Singleton;

class SettingsApi extends Api
{
    use Singleton;

    public function config()
    {
        $this->prefix = 'admin-settings';
    }

    public function get_setting_fields()
    {
        return [
            "status" => "success",
            "data"   => Settings::instance()->setting_fields()
        ];
    }

    public function post_save_settings()
    {
        $data = $this->request->get_params();
        unset( $data['action'] );
        $data = serialize( $data );
        update_option( Settings::SETTINGS_KEY, $data );

        return [
            'message' => esc_html__( 'Settings saved successfully!', 'doatkolom' ),
            'status'  => 'success'
        ];
    }

    public function post_add_gallery()
    {
        try {
            $data        = $this->request->get_params();
            $image_ids   = explode( ',', $data['image_ids'] );
            $gallery_ids = get_option( Settings::GALLERY_KEY );
            if ( !$gallery_ids ) {
                $gallery_ids = [];
            } else {
                $gallery_ids = unserialize( $gallery_ids );
            }
            $gallery_ids = array_merge( $gallery_ids, $image_ids );
            update_option( Settings::GALLERY_KEY, serialize( $gallery_ids ) );

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
            $data         = $this->request->get_params();
            $new_image_id = intval( $data['new_image_id'] );
            $old_image_id = intval( $data['old_image_id'] );

            $gallery_ids = get_option( Settings::GALLERY_KEY );
            if ( !$gallery_ids ) {
                $gallery_ids = [];
            } else {
                $gallery_ids = unserialize( $gallery_ids );
            }

            $old_image_array_key = array_search( $old_image_id, $gallery_ids );

            if ( $old_image_array_key ) {
                $gallery_ids[$old_image_array_key] = $new_image_id;
            }

            update_option( Settings::GALLERY_KEY, serialize( $gallery_ids ) );

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
        $gallery_ids = get_option( Settings::GALLERY_KEY );
        if ( !$gallery_ids ) {
            $gallery_ids = [];
        } else {
            $gallery_ids = unserialize( $gallery_ids );
        }

        $gallery_items = [];

        foreach ( $gallery_ids as $key => $gallery_id ) {

            $gallery = [
                'image_id'  => $gallery_id,
                'image_url' => ''
            ];

            $attachment = wp_get_attachment_image_src( intval( $gallery_id ), 'full' );

            if ( isset( $attachment[0] ) ) {
                $gallery['image_url'] = $attachment[0];
            }

            $gallery_items[] = $gallery;
        }

        return [
            'status' => 'success',
            'data'   => $gallery_items
        ];
    }

    public function post_delete_gallery()
    {
        $data = $this->request->get_params();
        try {
            $image_ids = explode( ',', $data['image_ids'] );

            $gallery_ids = get_option( Settings::GALLERY_KEY );

            if ( !$gallery_ids ) {
                $gallery_ids = [];
            } else {
                $gallery_ids = unserialize( $gallery_ids );
            }

            foreach ( $image_ids as $image_id ) {
                $image_array_key = array_search( intval( $image_id ), $gallery_ids );
                if ( is_numeric($image_array_key) ) {
                    unset( $gallery_ids[$image_array_key] );
                }
            }

            update_option( Settings::GALLERY_KEY, serialize( $gallery_ids ) );

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
