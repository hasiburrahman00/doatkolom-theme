<?php

namespace DoatKolom\Libs;

defined( 'ABSPATH' ) || exit;

class FormValidator
{
    /**
     * @var array
     */
    private $validation_messages = [];

    /**
     * @param array $form_field_rules
     */
    public static function validate( array $form_field_rules )
    {
        return ( new self )->validation( $form_field_rules );
    }

    /**
     * @param array $form_field_rules
     */
    private function validation( array $form_field_rules )
    {
        foreach ( $form_field_rules as $name => $rules ) {
            $rules = explode( '|', $rules );
            foreach ( $rules as $rule ) {
                if ( is_numeric( strpos( $rule, ':' ) ) ) {
                    $rules_ex       = explode( ':', $rule );
                    $rule           = $rules_ex[0];
                    $rule_condition = $rules_ex[1];
                }

                switch ( $rule ) {
                    case 'required':
                        if ( empty( $_REQUEST[$name] ) ) {
                            $this->validation_messages[$name] = $name . ' field is required.';
                        }
                        break;
                    case 'string':
                        if ( !empty( $_REQUEST[$name] ) && !is_string( $_REQUEST[$name] ) ) {
                            $this->validation_messages[$name] = $name . ' field must be string.';
                        }
                        break;
                    case 'max':
                        if ( !empty( $_REQUEST[$name] ) && strlen( $_REQUEST[$name] ) > intval( $rule_condition ) ) {
                            $this->validation_messages[$name] = $name . ' field value must be less than ' . $rule_condition;
                        }
                        break;
                    case 'email':
                        if ( !empty( $_REQUEST[$name] ) && !filter_var( $_REQUEST[$name], FILTER_VALIDATE_EMAIL ) ) {
                            $this->validation_messages[$name] = $name . ' field value must be email.';
                        }
                        break;
                }
            }
        }
        return $this;
    }

    public function send_response()
    {
        if ( !empty( $this->validation_messages ) ) {
            $return = [
                'messages' => $this->validation_messages
            ];
            wp_send_json( $return, 403 );
        }
    }
}
