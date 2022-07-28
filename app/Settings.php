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
                "home"      => $this->settings_page_tabs( $settings ),
                "developer" => $this->developer_page( $settings )
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
                        'default'   => isset( $settings['primary_font_url'] ) ? $settings['primary_font_url'] : ""
                    ],
                    'primary_font_family' => [
                        'type'      => 'text',
                        'label'     => esc_html__( 'Primary Font Family', 'doatkolom' ),
                        'default'   => isset( $settings['primary_font_family'] ) ? $settings['primary_font_family'] : ""
                    ],
                    'secondary_font_url' => [
                        'type'      => 'text',
                        'label'     => esc_html__( 'Secondary Font URL', 'doatkolom' ),
                        'default'   => isset( $settings['secondary_font_url'] ) ? $settings['secondary_font_url'] : "",
                    ],
                    'secondary_font_family' => [
                        'type'      => 'text',
                        'label'     => esc_html__( 'Secondary Font Family', 'doatkolom' ),
                        'default'   => isset( $settings['secondary_font_family'] ) ? $settings['secondary_font_family'] : "",
                    ],
                    'primary_font_weight' => [
                        'type'    => 'select',
                        'label'   => esc_html__( 'Primary Font Weight', 'doatkolom' ),
                        'default' => isset( $settings['primary_font_weight'] ) ? $settings['primary_font_weight'] : 700,
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
                        'default' => isset( $settings['secondary_font_weight'] ) ? $settings['secondary_font_weight'] : 400,
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
                        'default' => isset( $settings['tertiary_font_weight'] ) ? $settings['tertiary_font_weight'] : 600,
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
                    'doatkolom_primary_color_80' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary 80', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_primary_color_80'] ) ? $settings['doatkolom_primary_color_80'] : '#003646cc',
                    ],
                    'doatkolom_primary_color_60' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary 60', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_primary_color_60'] ) ? $settings['doatkolom_primary_color_60'] : '#00364699',
                    ],
                    'doatkolom_primary_color_20' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary 20', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_primary_color_20'] ) ? $settings['doatkolom_primary_color_20'] : '#00364633',
                    ],
                    'doatkolom_primary_color_10' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary 10', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_primary_color_10'] ) ? $settings['doatkolom_primary_color_10'] : '#0036461a',
                    ],
                    'doatkolom_secondary_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Secondary', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_secondary_color'] ) ? $settings['doatkolom_secondary_color'] : '#16AACA',
                    ],
                    'doatkolom_white_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'White', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_white_color'] ) ? $settings['doatkolom_white_color'] : '#ffffff',
                    ],
                    'doatkolom_white_color_90' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'White 90', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_white_color_90'] ) ? $settings['doatkolom_white_color_90'] : '#ffffffe6',
                    ],
                    'doatkolom_black_color_90' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Black 90', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_black_color_90'] ) ? $settings['doatkolom_black_color_90'] : '#202020',
                    ],
                    'doatkolom_gray_100_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Gray 100', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_gray_100_color'] ) ? $settings['doatkolom_gray_100_color'] : '#f3f4f6',
                    ],
                    'doatkolom_gray_200_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Gray 200', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_gray_200_color'] ) ? $settings['doatkolom_gray_200_color'] : '#e5e7eb',
                    ],
                    'doatkolom_gray_300_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Gray 300', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_gray_300_color'] ) ? $settings['doatkolom_gray_300_color'] : '#d1d5db',
                    ],
                    'doatkolom_gray_400_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Gray 400', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_gray_400_color'] ) ? $settings['doatkolom_gray_400_color'] : '#9ca3af',
                    ],
                    'doatkolom_gray_500_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Gray 500', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_gray_500_color'] ) ? $settings['doatkolom_gray_500_color'] : '#E6EBED',
                    ],
                    'doatkolom_slate_200_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Slate 200', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_slate_200_color'] ) ? $settings['doatkolom_slate_200_color'] : '#e2e8f0',
                    ],
                    'doatkolom_slate_300_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Slate 300', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_slate_300_color'] ) ? $settings['doatkolom_slate_300_color'] : '#cbd5e1',
                    ],
                    'doatkolom_slate_100_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Slate 100', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_slate_100_color'] ) ? $settings['doatkolom_slate_100_color'] : '#f1f5f9',
                    ],
                    'doatkolom_teal_100_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Teal 100', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_teal_100_color'] ) ? $settings['doatkolom_teal_100_color'] : '#E7F4F6',
                    ],
                    'doatkolom_blue_100_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Blue 100', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_blue_100_color'] ) ? $settings['doatkolom_blue_100_color'] : '#F5FBFD',
                    ],
                    'doatkolom_blue_600_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Blue 600', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_blue_600_color'] ) ? $settings['doatkolom_blue_600_color'] : '#2563eb',
                    ],
                    'doatkolom_green_600_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Green 600', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_green_600_color'] ) ? $settings['doatkolom_green_600_color'] : '#16a34a',
                    ],
                    'doatkolom_red_100_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Red 100', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_red_100_color'] ) ? $settings['doatkolom_red_100_color'] : '#FDF4F4',
                    ],
                    'doatkolom_red_500_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Red 500', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_red_500_color'] ) ? $settings['doatkolom_red_500_color'] : '#DB231E',
                    ],
                    'doatkolom_red_600_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Red 600', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_red_600_color'] ) ? $settings['doatkolom_red_600_color'] : '#dc2626',
                    ],
                    'doatkolom_paste_green_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Paste', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_paste_green_color'] ) ? $settings['doatkolom_paste_green_color'] : '#035769',
                    ],
                    'doatkolom_paste_green_400_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Green 400', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_paste_green_400_color'] ) ? $settings['doatkolom_paste_green_400_color'] : '#C1F1FF',
                    ],
                    'doatkolom_paste_blue_400_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Blue 400', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_paste_blue_400_color'] ) ? $settings['doatkolom_paste_blue_400_color'] : '#3EB9D3',
                    ],
                    'doatkolom_paste_blue_100_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Paste 400', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_paste_blue_100_color'] ) ? $settings['doatkolom_paste_blue_100_color'] : '#F8FEFF',
                    ],
                    'doatkolom_primary_blue_100_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary 100', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_primary_blue_100_color'] ) ? $settings['doatkolom_primary_blue_100_color'] : '#F3FDFF',
                    ],
                    'doatkolom_pink_100_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Pink 100', 'doatkolom' ),
                        'default' => isset( $settings['doatkolom_pink_100_color'] ) ? $settings['doatkolom_pink_100_color'] : '#FEF8F8',
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
