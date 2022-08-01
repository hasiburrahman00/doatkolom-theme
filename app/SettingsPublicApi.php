<?php

namespace DoatKolom;

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
        FormValidator::validate( [
            'full_name'      => 'required|string|max:191',
            'email'          => 'required|email|max:50',
            'contact_number' => 'required|string|max:50',
            'location'       => 'required|string|max:191',
            'message'        => 'required|string|max:1000'
        ] )->send_response();

        $contact_form7_id = get_doatkolom_theme_setting( 'contact_form7_id' );
        if ( empty( $contact_form7_id ) ) {
            wp_send_json( ['message' => esc_html__( 'Sorry, something was wrong', 'doatkolom-theme' )], 404 );
        }

        $data = $this->request->get_params();
        unset( $data['action'] );
        $response = wp_remote_post( get_rest_url( '', 'contact-form-7/v1/contact-forms/' . $contact_form7_id . '/feedback' ), [
            'headers' => ['Content-Type' => 'multipart/form-data'],
            'body'    => $data
        ] );

        $response_code = wp_remote_retrieve_response_code( $response );
        $return        = [];

        if ( 200 === $response_code ) {
            $return['message'] = esc_html__( 'Form data submitted successfully!', 'doatkolom-theme' );
        } else {
            $return['message'] = esc_html__( 'Sorry, something was wrong', 'doatkolom-theme' );
        }

        wp_send_json( $return, $response_code );
    }
}
