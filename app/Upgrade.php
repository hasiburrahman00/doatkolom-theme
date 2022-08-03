<?php

namespace DoatKolom;

defined( 'ABSPATH' ) || exit;

class Upgrade
{
    public function __construct()
    {
        add_filter( 'site_transient_update_themes', [$this, 'update_themes'] );
    }

    /**
     * @param $transient
     * @return mixed
     */
    public function update_themes( $transient )
    {
        $version    = DOATKOLOM_VERSION;
        $data       = get_transient( 'doatkolom-theme-update' . $version );
        $stylesheet = get_template();

        if ( !$data ) {

            $remote = wp_remote_get(
                DOATKOLOM_UPGRADE_API,
                [
                    'timeout' => 10,
                    'headers' => [
                        'Accept' => 'application/json'
                    ]
                ]
            );

            if ( is_wp_error( $remote ) || 200 !== wp_remote_retrieve_response_code( $remote ) || empty( wp_remote_retrieve_body( $remote ) ) ) {
                return $transient;
            }

            $remote = json_decode( wp_remote_retrieve_body( $remote ) );

            if ( !$remote ) {
                return $transient;
            }

            $data = [
                'theme'        => $stylesheet,
                'url'          => $remote->details_url,
                // 'requires'     => $remote->requires,
                'requires_php' => $remote->requires_php,
                'new_version'  => $remote->version,
                'package'      => $remote->download_url
            ];

            set_transient( 'doatkolom-theme-update' . $version, $data, HOUR_IN_SECONDS );
        }

        $data = (array) $data;

        if ( version_compare( $version, $data['new_version'], '<' )
            // && version_compare( $remote->requires, get_bloginfo( 'version' ), '<' )
             && version_compare( $data['requires_php'], PHP_VERSION, '<' )
        ) {
            $transient->response[$stylesheet] = $data;
        } else {
            // $transient->no_update[$stylesheet] = $data;
        }

        return $transient;
    }
}
