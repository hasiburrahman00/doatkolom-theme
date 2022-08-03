<?php

namespace DoatKolom;

defined( 'ABSPATH' ) || exit;

use DoatKolom\Core\Api;
use DoatKolom\Core\Singleton;
use DoatKolom\Libs\FormValidator;

class SettingsPublicApi extends Api
{
    use Singleton;

    public function config()
    {
        $this->prefix         = 'settings';
        $this->manage_options = false;
    }

    /**
     * @return mixed
     */
    public function get_galleries()
    {
        return [
            'status' => 'success',
            'data'   => Settings::instance()->gallery_items()
        ];
    }

    public function post_submit_form()
    {
        $rules = [
            'full_name' => 'required|string|max:191',
            'email'     => 'required|email|max:50',
            'phone'     => 'required|string|max:50',
            'location'  => 'required|string|max:191',
            'message'   => 'required|string|max:1000'
        ];

        FormValidator::validate( $rules )->send_response();

        $contact_form7_id = get_doatkolom_theme_setting( 'contact_form7_id' );
        if ( empty( $contact_form7_id ) ) {
            wp_send_json( ['message' => esc_html__( 'Sorry, something was wrong', 'doatkolom-theme' )], 404 );
        }

        $post_id = wp_insert_post( [
            'post_type'   => 'doatkolom-contact',
            'post_title'  => "",
            'post_status' => 'publish'
        ] );

        $data = $this->request->get_params();

        foreach ( $rules as $name => $rule ) {
            add_post_meta( $post_id, $name, sanitize_text_field( $data[$name] ) );
        }

        wp_update_post( [
            'ID'         => $post_id,
            'post_title' => "#" . $post_id
        ] );

        wp_send_json( [
            'message' => esc_html__( 'Form data submitted successfully!', 'doatkolom-theme' )
        ], 201 );
    }
}
