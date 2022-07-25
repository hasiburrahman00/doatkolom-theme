<?php

namespace Doatkolom;

use DoatKolom\Core\Api;
use DoatKolom\Core\Singleton;

class Settings extends Api
{
    const SETTINGS_KEY = 'doatkolom_settings';
    const GALLERY_KEY  = 'doatkolom_gallery';

    use Singleton;

    /**
     * @var array
     */
    public $settings = [];

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
            "status" => "success",
            "data"   => [
                "home" => $this->settings_page_tabs( $settings )
            ]
        ];
    }

    /**
     * @param $settings
     */
    private function settings_page_tabs( $settings )
    {
        return [
            'site_settings' => [
                'title'         => esc_html__( 'Site Settings', 'doatkolom' ),
                'tutorial_link' => 'https://www.youtube.com/embed/D0UnqGm_miA',
                'fields'        => [
                    'institution_logo' => [
                        'type'      => 'media',
                        'label'     => esc_html__( 'Institution Logo', 'doatkolom' ),
                        'default'   => isset( $settings['institution_logo'] ) ? $settings['institution_logo'] : '',
                        'media_url' => $this->get_attachment_url( 'institution_logo' )
                    ],
                    'website_favicon'  => [
                        'type'      => 'media',
                        'label'     => esc_html__( 'Website Favicon', 'doatkolom' ),
                        'default'   => isset( $settings['website_favicon'] ) ? $settings['website_favicon'] : '',
                        'media_url' => $this->get_attachment_url( 'website_favicon' )
                    ],
                    'site_title'       => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Site Title', 'doatkolom' ),
                        'default' => isset( $settings['site_title'] ) ? $settings['site_title'] : ''
                    ],
                    'site_description' => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Site Description', 'doatkolom' ),
                        'default' => isset( $settings['site_description'] ) ? $settings['site_description'] : ''
                    ],
                    'site_keywords'    => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Site Keywords', 'doatkolom' ),
                        'default' => isset( $settings['site_keywords'] ) ? $settings['site_keywords'] : ''
                    ]
                ]
            ],
            'information'   => [
                'title'         => esc_html__( 'Information', 'doatkolom' ),
                'tutorial_link' => 'https://www.youtube.com/embed/D0UnqGm_miA',
                'fields'        => [
                    'institution_type' => [
                        'type'    => 'select',
                        'label'   => esc_html__( 'Institution Type', 'doatkolom' ),
                        'default' => isset( $settings['institution_type'] ) ? $settings['institution_type'] : '',
                        'options' => [
                            ['label' => 'School', 'value' => 'school'],
                            ['label' => 'College', 'value' => 'college'],
                            ['label' => 'University', 'value' => 'university'],
                            ['label' => 'Coaching', 'value' => 'coaching'],
                            ['label' => 'Agency', 'value' => 'agency'],
                            ['label' => 'Madrasha', 'value' => 'madrasha'],
                            ['label' => 'Personal/Small Business', 'value' => 'personal'],
                            ['label' => 'NGO', 'value' => 'ngo'],
                            ['label' => 'DoatKolom', 'value' => 'doatkolom'],
                            ['label' => 'Others', 'value' => 'others']
                        ]
                    ],
                    'institution_code' => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Institution Code', 'doatkolom' ),
                        'default' => isset( $settings['institution_code'] ) ? $settings['institution_code'] : ''
                    ],
                    'official_email'   => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Official Email Address', 'doatkolom' ),
                        'default' => isset( $settings['official_email'] ) ? $settings['official_email'] : ''
                    ],
                    'eiin_code'        => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'EIIN Code', 'doatkolom' ),
                        'default' => isset( $settings['eiin_code'] ) ? $settings['eiin_code'] : ''
                    ],
                    'official_phone'   => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Official Phone Number', 'doatkolom' ),
                        'default' => isset( $settings['official_phone'] ) ? $settings['official_phone'] : ''
                    ],
                    'full_address'     => [
                        'type'    => 'textarea',
                        'label'   => esc_html__( 'Full Address', 'doatkolom' ),
                        'default' => isset( $settings['full_address'] ) ? $settings['full_address'] : ''
                    ]
                ]
            ],
            'quick_url'     => [
                'title'         => esc_html__( 'Quick Menu URL', 'doatkolom' ),
                'tutorial_link' => 'https://www.youtube.com/embed/D0UnqGm_miA',
                'fields'        => [
                    'doatkolom_app_template' => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'DoatKolom App Template', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_app_template'] ) ? $settings['doatkolom_app_template'] : ''
                    ],
                    'login_page'             => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Login Page', 'doatkolom' ),
                        'default' => isset( $settings['login_page'] ) ? $settings['login_page'] : ''
                    ],
                    'registration_page'      => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Registration Page', 'doatkolom' ),
                        'default' => isset( $settings['registration_page'] ) ? $settings['registration_page'] : ''
                    ],
                    'facebook'               => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Facebook', 'doatkolom' ),
                        'default' => isset( $settings['facebook'] ) ? $settings['facebook'] : ''
                    ],
                    'linkedin'               => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'LinkedIn', 'doatkolom' ),
                        'default' => isset( $settings['linkedin'] ) ? $settings['linkedin'] : ''
                    ],
                    'youtube'                => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Youtube', 'doatkolom' ),
                        'default' => isset( $settings['youtube'] ) ? $settings['youtube'] : ''
                    ],
                    'whatsapp'               => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'WhatsApp', 'doatkolom' ),
                        'default' => isset( $settings['whatsapp'] ) ? $settings['whatsapp'] : ''
                    ],
                    'custom_contact_page'    => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Custom Contact Page', 'doatkolom' ),
                        'default' => isset( $settings['custom_contact_page'] ) ? $settings['custom_contact_page'] : ''
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
            $image_ids   = $data['image_ids'];
            $gallery_ids = get_option( self::GALLERY_KEY );
            if ( !$gallery_ids ) {
                $gallery_ids = [];
            } else {
                $gallery_ids = unserialize( $gallery_ids );
            }
            $gallery_ids = array_merge( $gallery_ids, $image_ids );
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
            'status' => 'success',
            'data'   => [
                'items' => $gallery_items,
                'total' => $total
            ]
        ];
    }

    public function post_delete_gallery()
    {
        $data = $this->request->get_params();
        try {
            $image_keys = $data['image_keys'];

            $gallery_ids = get_option( self::GALLERY_KEY );
            if ( !$gallery_ids ) {
                $gallery_ids = [];
            } else {
                $gallery_ids = unserialize( $gallery_ids );
            }

            foreach ( $image_keys as $image_key ) {
                unset( $gallery_ids[$image_key] );
            }
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
