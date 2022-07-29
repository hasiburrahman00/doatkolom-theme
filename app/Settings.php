<?php

namespace DoatKolom;

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
                "home"      => $this->settings_page_tabs( $settings ),
                "developer" => $this->developer_page( $settings )
            ]
        ];
    }

    public static function options() {
        $settings = get_option( self::SETTINGS_KEY );
        if ( !$settings ) {
            $settings = [];
        } else {
            $settings = unserialize( $settings );
        }
        return $settings;
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
                        'default' => isset( $settings['site_title'] ) ? $settings['site_title'] : 'DoatKolom Website'
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
                        'default' => isset( $settings['institution_type'] ) ? $settings['institution_type'] : 'school',
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
                        'default' => isset( $settings['official_email'] ) ? $settings['official_email'] : 'example@domain.com'
                    ],
                    'eiin_code'        => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'EIIN Code', 'doatkolom' ),
                        'default' => isset( $settings['eiin_code'] ) ? $settings['eiin_code'] : 'EIIN: 000000'
                    ],
                    'official_phone'   => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Official Phone Number', 'doatkolom' ),
                        'default' => isset( $settings['official_phone'] ) ? $settings['official_phone'] : '+88123456789'
                    ],
                    'call_btn_label'   => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Call Button Label', 'doatkolom' ),
                        'default' => isset( $settings['call_btn_label'] ) ? $settings['call_btn_label'] : 'Talk to us'
                    ],
                    'full_address'     => [
                        'type'    => 'textarea',
                        'label'   => esc_html__( 'Full Address', 'doatkolom' ),
                        'default' => isset( $settings['full_address'] ) ? $settings['full_address'] : 'Example Dakkhin Para, Savar, Dhaka.1340'
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
                    'facebook'               => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Facebook', 'doatkolom' ),
                        'default' => isset( $settings['facebook'] ) ? $settings['facebook'] : 'https://www.facebook.com/'
                    ],
                    'linkedin'               => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'LinkedIn', 'doatkolom' ),
                        'default' => isset( $settings['linkedin'] ) ? $settings['linkedin'] : ''
                    ],
                    'youtube'                => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Youtube', 'doatkolom' ),
                        'default' => isset( $settings['youtube'] ) ? $settings['youtube'] : 'https://www.youtube.com/'
                    ],
                    'whatsapp'               => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'WhatsApp', 'doatkolom' ),
                        'default' => isset( $settings['whatsapp'] ) ? $settings['whatsapp'] : 'whatsapp_url'
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

    /**
     * @param $settings
     */
    private function developer_page( $settings ) {
        return [
            'font_family_tab' => [
                'title'         => esc_html__( 'Google Fonts Settings', 'doatkolom' ),
                'fields'        => [
                    'primary_font_url' => [
                        'type'      => 'text',
                        'label'     => esc_html__( 'Primary Font URL', 'doatkolom' ),
                        'default'   => isset( $settings['primary_font_url'] ) ? $settings['primary_font_url'] : "@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');"
                    ],
                    'primary_font_family' => [
                        'type'      => 'text',
                        'label'     => esc_html__( 'Primary Font Family', 'doatkolom' ),
                        'default'   => isset( $settings['primary_font_family'] ) ? $settings['primary_font_family'] : "Abril Fatface, cursive"
                    ],
                    'secondary_font_url' => [
                        'type'      => 'text',
                        'label'     => esc_html__( 'Secondary Font URL', 'doatkolom' ),
                        'default'   => isset( $settings['secondary_font_url'] ) ? $settings['secondary_font_url'] : "@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@400;700&display=swap');",
                    ],
                    'secondary_font_family' => [
                        'type'      => 'text',
                        'label'     => esc_html__( 'Secondary Font Family', 'doatkolom' ),
                        'default'   => isset( $settings['secondary_font_family'] ) ? $settings['secondary_font_family'] : "Spectral, serif",
                    ],
                    'primary_font_weight' => [
                        'type'    => 'select',
                        'label'   => esc_html__( 'Primary Font Weight', 'doatkolom' ),
                        'default' => isset( $settings['primary_font_weight'] ) ? $settings['primary_font_weight'] : 400,
                        'options' => [
                            ['label' => 'Thin 100', 'value' => 100],
                            ['label' => 'Light', 'value' => 300],
                            ['label' => 'Regular', 'value' => 400],
                            ['label' => 'Medium', 'value' => 500],
                            ['label' => 'Semi Bold', 'value' => 600],
                            ['label' => 'Bold', 'value' => 700],
                            ['label' => 'Extra Bold', 'value' => 800],
                            ['label' => 'Black', 'value' =>  900],
                        ]
                    ],
                    'secondary_font_weight' => [
                        'type'    => 'select',
                        'label'   => esc_html__( 'Secondary Font Weight', 'doatkolom' ),
                        'default' => isset( $settings['secondary_font_weight'] ) ? $settings['secondary_font_weight'] : 600,
                        'options' => [
                            ['label' => 'Thin 100', 'value' => 100],
                            ['label' => 'Light', 'value' => 300],
                            ['label' => 'Regular', 'value' => 400],
                            ['label' => 'Medium', 'value' => 500],
                            ['label' => 'Semi Bold', 'value' => 600],
                            ['label' => 'Bold', 'value' => 700],
                            ['label' => 'Extra Bold', 'value' => 800],
                            ['label' => 'Black', 'value' =>  900],
                        ]
                    ],
                    'tertiary_font_weight' => [
                        'type'    => 'select',
                        'label'   => esc_html__( 'Tertiary Font Weight', 'doatkolom' ),
                        'default' => isset( $settings['tertiary_font_weight'] ) ? $settings['tertiary_font_weight'] : 700,
                        'options' => [
                            ['label' => 'Thin 100', 'value' => 100],
                            ['label' => 'Light', 'value' => 300],
                            ['label' => 'Regular', 'value' => 400],
                            ['label' => 'Medium', 'value' => 500],
                            ['label' => 'Semi Bold', 'value' => 600],
                            ['label' => 'Bold', 'value' => 700],
                            ['label' => 'Extra Bold', 'value' => 800],
                            ['label' => 'Black', 'value' =>  900],
                        ]
                    ],
                ]
            ],

            'theme_color_tab' => [
                'title'         => esc_html__( 'Theme Color', 'doatkolom' ),
                'fields'        => [
                    'doatkolom_primary_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_primary_color'] ) ? $settings['doatkolom_primary_color'] : '#003646',
                    ],
                    'doatkolom_primary_opacity_80_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary 80', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_primary_opacity_80_color'] ) ? $settings['doatkolom_primary_opacity_80_color'] : 'rgba(0, 54, 70, .8)',
                    ],
                    'doatkolom_primary_opacity_60_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary opacity 60', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_primary_opacity_60_color'] ) ? $settings['doatkolom_primary_opacity_60_color'] : 'rgba(0, 54, 70, .6)',
                    ],
                    'doatkolom_primary_light_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary light', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_primary_light_color'] ) ? $settings['doatkolom_primary_light_color'] : '#0036461a',
                    ],
                    'doatkolom_primary_dark_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary dark', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_primary_dark_color'] ) ? $settings['doatkolom_primary_dark_color'] : '#001f28',
                    ],
                    'doatkolom_primary_shadow_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary shadow', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_primary_shadow_color'] ) ? $settings['doatkolom_primary_shadow_color'] : 'rgba(0, 54, 70, .2)',
                    ],
                    'doatkolom_secondary_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Secondary', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_secondary_color'] ) ? $settings['doatkolom_secondary_color'] : '#16AACA',
                    ],
                    'doatkolom_secondary_shadow_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Secondary shadow', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_secondary_shadow_color'] ) ? $settings['doatkolom_secondary_shadow_color'] : 'rgba(0, 0, 0, .2)',
                    ],
                    'doatkolom_white_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'White', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_white_color'] ) ? $settings['doatkolom_white_color'] : '#ffffff',
                    ],
                    'doatkolom_black_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Black', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_black_color'] ) ? $settings['doatkolom_black_color'] : '#202020',
                    ],
                    'doatkolom_gray_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Gray', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_gray_color'] ) ? $settings['doatkolom_gray_color'] : '#d1d5db',
                    ],
                    'doatkolom_light_gray_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Light gray', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_light_gray_color'] ) ? $settings['doatkolom_light_gray_color'] : '#f9fafb',
                    ],
                    'doatkolom_overlay_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Overlay', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_overlay_color'] ) ? $settings['doatkolom_overlay_color'] : 'rgba(0, 54, 70, .8)',
                    ],
                    'doatkolom_border_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Border', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_border_color'] ) ? $settings['doatkolom_border_color'] : 'rgba(0, 54, 70, .1)',
                    ],
                    'doatkolom_title_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Title', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_title_color'] ) ? $settings['doatkolom_title_color'] : '#003646',
                    ],
                    'doatkolom_sub_title_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Sub title', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_sub_title_color'] ) ? $settings['doatkolom_sub_title_color'] : '#003646',
                    ],
                    'doatkolom_title_description_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Title description', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_title_description_color'] ) ? $settings['doatkolom_title_description_color'] : '#335E6B',
                    ],
                    'doatkolom_paragraph_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Paragraph', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_paragraph_color'] ) ? $settings['doatkolom_paragraph_color'] : '#003646',
                    ],
                    'doatkolom_body_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Body', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_body_color'] ) ? $settings['doatkolom_body_color'] : '#ffffff',
                    ],
                    'doatkolom_footer_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Footer', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_footer_color'] ) ? $settings['doatkolom_footer_color'] : '#E7F4F6',
                    ],
                ]
            ],

            'doatkolom_auth_tab' => [
                'title'         => esc_html__( 'Authentication and Token Settings', 'doatkolom' ),
                'fields'        => [
                    'auth_token' => [
                        'type'    => 'auth',
                        'label'   => esc_html__( 'Authentication Token', 'doatkolom' ),
                        'default' => isset( $settings['auth_token'] ) ? $settings['auth_token'] : [
                            'token' => '',
                            'isvalid' => false,
                        ],
                    ],
                ]
            ],
            
        ];
    }

    /**
     * 
     *
     * get css variabels   
     */ 
    public static function css_variables() {
        $settings = get_option( self::SETTINGS_KEY );
        if ( !$settings ) {
            $settings = [];
        } else {
            $settings = unserialize( $settings );
        }

        $data = (new self)->developer_page( $settings );
        unset( $data['doatkolom_auth_tab'] );

        // colors variable
        $colors = $data['theme_color_tab']['fields'];
        $fonts  = $data['font_family_tab']['fields'];

        $primary_font_url   = $fonts['primary_font_url']['default'];
        $secondary_font_url = $fonts['secondary_font_url']['default'];

        $varString = '';
        foreach( $colors as $name => $value ) {
            $varString .= "--".$name.":".$value['default'].";\n";
        }

        unset($fonts['primary_font_url']);
        unset($fonts['secondary_font_url']);

        foreach( $fonts as $name => $value ) {
            $varString .= "--".$name.":".$value['default'].";\n";
        }

        return "
            ".$primary_font_url."\n
            ".$secondary_font_url."\n
            :root{\n".$varString."}\n
        ";
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
        return DOATKOLOM_IMG . 'institution-logo.webp';
    }

    public function post_add_gallery()
    {
        try {
            $data        = $this->request->get_params();
            $image_ids   = explode(',', $data['image_ids']);
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
            $data         = $this->request->get_params();
            $new_image_id = intval($data['new_image_id']);
            $old_image_id = intval($data['old_image_id']);

            $gallery_ids = get_option( self::GALLERY_KEY );
            if ( !$gallery_ids ) {
                $gallery_ids = [];
            } else {
                $gallery_ids = unserialize( $gallery_ids );
            }

            $old_image_array_key = array_search($old_image_id, $gallery_ids);
            
            if($old_image_array_key) {
                $gallery_ids[$old_image_array_key] = $new_image_id;
            }

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
        $gallery_ids = get_option( self::GALLERY_KEY );
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

            $attachment = wp_get_attachment_image_src( intval($gallery_id), 'full' );

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

            $gallery_ids = get_option( self::GALLERY_KEY );

            if ( !$gallery_ids ) {
                $gallery_ids = [];
            } else {
                $gallery_ids = unserialize( $gallery_ids );
            }

            foreach ( $image_ids as $image_id ) {
                $image_array_key = array_search( intval( $image_id ), $gallery_ids );
                if ( $image_array_key ) {
                    unset( $gallery_ids[$image_array_key] );
                }
            }

            update_option( self::GALLERY_KEY, serialize( $gallery_ids ) );

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
