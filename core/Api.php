<?php

namespace DoatKolom\Core;

defined( 'ABSPATH' ) || exit;

abstract class Api
{
    /**
     * @var string
     */
    public $prefix = '';
    /**
     * @var string
     */
    public $param = '';
    /**
     * @var mixed
     */
    public $request = null;

    abstract public function config();

    public function __construct()
    {
        $this->config();
        $this->init();
    }

    public function init()
    {
        add_action( 'rest_api_init', function () {
            register_rest_route( untrailingslashit( 'doatkolom-theme/v1/' . $this->prefix ), '/(?P<action>\w+)/' . ltrim( $this->param, '/' ), [
                'methods'             => \WP_REST_Server::ALLMETHODS,
                'callback'            => [$this, 'action'],
                'permission_callback' => function () {
                    return true;
                    // return current_user_can( 'manage_options' );
                }
            ] );
        } );
    }

    /**
     * @param $request
     * @return mixed
     */
    public function action( $request )
    {
        $this->request = $request;
        $action_class  = strtolower( $this->request->get_method() ) . '_' . sanitize_key( $this->request['action'] );

        if ( method_exists( $this, $action_class ) ) {
            return $this->{$action_class}();
        }
    }
}
