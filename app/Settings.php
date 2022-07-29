<?php

namespace DoatKolom;

use DoatKolom\Core\Singleton;

class Settings
{
    const SETTINGS_KEY = 'doatkolom_settings';
    const GALLERY_KEY  = 'doatkolom_gallery';

    use Singleton;

    /**
     * @var array
     */
    public $settings = [];

    public function __construct()
    {
        $this->settings = doatkolom_app()->getSettings();
    }

    public function setting_fields()
    {
        return [
            "home"      => $this->settings_page_tabs(),
            "developer" => $this->developer_page()
        ];
    }

    public function settings_page_tabs()
    {
        return [
            'site_settings' => [
                'title'         => esc_html__( 'Site Settings', 'doatkolom' ),
                'tutorial_link' => 'https://www.youtube.com/embed/D0UnqGm_miA',
                'fields'        => [
                    'institution_logo' => [
                        'type'      => 'media',
                        'label'     => esc_html__( 'Institution Logo', 'doatkolom' ),
                        'default'   => $this->getSettingDbValue( 'institution_logo' ),
                        'media_url' => $this->get_attachment_url( 'institution_logo' )
                    ],
                    'website_favicon'  => [
                        'type'      => 'media',
                        'label'     => esc_html__( 'Website Favicon', 'doatkolom' ),
                        'default'   => $this->getSettingDbValue( 'website_favicon' ),
                        'media_url' => $this->get_attachment_url( 'website_favicon' )
                    ],
                    'site_title'       => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Site Title', 'doatkolom' ),
                        'default' => $this->getSettingDbValue( 'site_title', 'DoatKolom Website' )
                    ],
                    'site_description' => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Site Description', 'doatkolom' ),
                        'default' => $this->getSettingDbValue( 'site_description' )
                    ],
                    'site_keywords'    => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Site Keywords', 'doatkolom' ),
                        'default' => $this->getSettingDbValue( 'site_keywords' )
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
                        'default' => $this->getSettingDbValue( 'institution_type', 'school' ),
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
                        'default' => $this->getSettingDbValue( 'institution_code' )
                    ],
                    'official_email'   => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Official Email Address', 'doatkolom' ),
                        'default' => $this->getSettingDbValue( 'official_email', 'example@domain.com' )
                    ],
                    'eiin_code'        => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'EIIN Code', 'doatkolom' ),
                        'default' => $this->getSettingDbValue( 'eiin_code', 'EIIN: 000000' )
                    ],
                    'official_phone'   => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Official Phone Number', 'doatkolom' ),
                        'default' => $this->getSettingDbValue( 'official_phone', '+88123456789' )
                    ],
                    'call_btn_label'   => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Call Button Label', 'doatkolom' ),
                        'default' => $this->getSettingDbValue( 'call_btn_label', 'Talk to us' )
                    ],
                    'full_address'     => [
                        'type'    => 'textarea',
                        'label'   => esc_html__( 'Full Address', 'doatkolom' ),
                        'default' => $this->getSettingDbValue( 'full_address', 'Example Dakkhin Para, Savar, Dhaka.1340' )
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
                        'default' => $this->getSettingDbValue( 'doatkolom_app_template' )
                    ],
                    'login_page'             => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Login Page', 'doatkolom' ),
                        'default' => $this->getSettingDbValue( 'login_page' )
                    ],
                    'facebook'               => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Facebook', 'doatkolom' ),
                        'default' => $this->getSettingDbValue( 'facebook', 'https://www.facebook.com/' )
                    ],
                    'linkedin'               => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'LinkedIn', 'doatkolom' ),
                        'default' => $this->getSettingDbValue( 'linkedin' )
                    ],
                    'youtube'                => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Youtube', 'doatkolom' ),
                        'default' => $this->getSettingDbValue( 'youtube', 'https://www.youtube.com/' )
                    ],
                    'whatsapp'               => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'WhatsApp', 'doatkolom' ),
                        'default' => $this->getSettingDbValue( 'whatsapp', 'whatsapp_url' )
                    ],
                    'custom_contact_page'    => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Custom Contact Page', 'doatkolom' ),
                        'default' => $this->getSettingDbValue( 'custom_contact_page' )
                    ]
                ]
            ]
        ];
    }

    public function developer_page()
    {
        return [
            'font_family_tab'    => [
                'title'  => esc_html__( 'Google Fonts Settings', 'doatkolom' ),
                'fields' => [
                    'primary_font_url'      => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Primary Font URL', 'doatkolom' ),
                        'default' => isset( $this->settings['primary_font_url'] ) ? $this->settings['primary_font_url'] : "@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');"
                    ],
                    'primary_font_family'   => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Primary Font Family', 'doatkolom' ),
                        'default' => isset( $this->settings['primary_font_family'] ) ? $this->settings['primary_font_family'] : "Abril Fatface, cursive"
                    ],
                    'secondary_font_url'    => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Secondary Font URL', 'doatkolom' ),
                        'default' => isset( $this->settings['secondary_font_url'] ) ? $this->settings['secondary_font_url'] : "@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@400;700&display=swap');"
                    ],
                    'secondary_font_family' => [
                        'type'    => 'text',
                        'label'   => esc_html__( 'Secondary Font Family', 'doatkolom' ),
                        'default' => isset( $this->settings['secondary_font_family'] ) ? $this->settings['secondary_font_family'] : "Spectral, serif"
                    ],
                    'primary_font_weight'   => [
                        'type'    => 'select',
                        'label'   => esc_html__( 'Primary Font Weight', 'doatkolom' ),
                        'default' => isset( $this->settings['primary_font_weight'] ) ? $this->settings['primary_font_weight'] : 400,
                        'options' => [
                            ['label' => 'Thin 100', 'value' => 100],
                            ['label' => 'Light', 'value' => 300],
                            ['label' => 'Regular', 'value' => 400],
                            ['label' => 'Medium', 'value' => 500],
                            ['label' => 'Semi Bold', 'value' => 600],
                            ['label' => 'Bold', 'value' => 700],
                            ['label' => 'Extra Bold', 'value' => 800],
                            ['label' => 'Black', 'value' => 900]
                        ]
                    ],
                    'secondary_font_weight' => [
                        'type'    => 'select',
                        'label'   => esc_html__( 'Secondary Font Weight', 'doatkolom' ),
                        'default' => isset( $this->settings['secondary_font_weight'] ) ? $this->settings['secondary_font_weight'] : 600,
                        'options' => [
                            ['label' => 'Thin 100', 'value' => 100],
                            ['label' => 'Light', 'value' => 300],
                            ['label' => 'Regular', 'value' => 400],
                            ['label' => 'Medium', 'value' => 500],
                            ['label' => 'Semi Bold', 'value' => 600],
                            ['label' => 'Bold', 'value' => 700],
                            ['label' => 'Extra Bold', 'value' => 800],
                            ['label' => 'Black', 'value' => 900]
                        ]
                    ],
                    'tertiary_font_weight'  => [
                        'type'    => 'select',
                        'label'   => esc_html__( 'Tertiary Font Weight', 'doatkolom' ),
                        'default' => isset( $this->settings['tertiary_font_weight'] ) ? $this->settings['tertiary_font_weight'] : 700,
                        'options' => [
                            ['label' => 'Thin 100', 'value' => 100],
                            ['label' => 'Light', 'value' => 300],
                            ['label' => 'Regular', 'value' => 400],
                            ['label' => 'Medium', 'value' => 500],
                            ['label' => 'Semi Bold', 'value' => 600],
                            ['label' => 'Bold', 'value' => 700],
                            ['label' => 'Extra Bold', 'value' => 800],
                            ['label' => 'Black', 'value' => 900]
                        ]
                    ]
                ]
            ],

            'theme_color_tab'    => [
                'title'  => esc_html__( 'Theme Color', 'doatkolom' ),
                'fields' => [
                    'doatkolom_primary_color'            => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_primary_color'] ) ? $this->settings['doatkolom_primary_color'] : '#003646'
                    ],
                    'doatkolom_primary_opacity_80_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary 80', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_primary_opacity_80_color'] ) ? $this->settings['doatkolom_primary_opacity_80_color'] : 'rgba(0, 54, 70, .8)'
                    ],
                    'doatkolom_primary_opacity_60_color' => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary opacity 60', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_primary_opacity_60_color'] ) ? $this->settings['doatkolom_primary_opacity_60_color'] : 'rgba(0, 54, 70, .6)'
                    ],
                    'doatkolom_primary_light_color'      => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary light', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_primary_light_color'] ) ? $this->settings['doatkolom_primary_light_color'] : '#0036461a'
                    ],
                    'doatkolom_primary_dark_color'       => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary dark', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_primary_dark_color'] ) ? $this->settings['doatkolom_primary_dark_color'] : '#001f28'
                    ],
                    'doatkolom_primary_shadow_color'     => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Primary shadow', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_primary_shadow_color'] ) ? $this->settings['doatkolom_primary_shadow_color'] : 'rgba(0, 54, 70, .2)'
                    ],
                    'doatkolom_secondary_color'          => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Secondary', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_secondary_color'] ) ? $this->settings['doatkolom_secondary_color'] : '#16AACA'
                    ],
                    'doatkolom_secondary_shadow_color'   => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Secondary shadow', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_secondary_shadow_color'] ) ? $this->settings['doatkolom_secondary_shadow_color'] : 'rgba(0, 0, 0, .2)'
                    ],
                    'doatkolom_white_color'              => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'White', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_white_color'] ) ? $this->settings['doatkolom_white_color'] : '#ffffff'
                    ],
                    'doatkolom_black_color'              => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Black', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_black_color'] ) ? $this->settings['doatkolom_black_color'] : '#202020'
                    ],
                    'doatkolom_gray_color'               => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Gray', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_gray_color'] ) ? $this->settings['doatkolom_gray_color'] : '#d1d5db'
                    ],
                    'doatkolom_light_gray_color'         => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Light gray', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_light_gray_color'] ) ? $this->settings['doatkolom_light_gray_color'] : '#f9fafb'
                    ],
                    'doatkolom_overlay_color'            => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Overlay', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_overlay_color'] ) ? $this->settings['doatkolom_overlay_color'] : 'rgba(0, 54, 70, .8)'
                    ],
                    'doatkolom_border_color'             => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Border', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_border_color'] ) ? $this->settings['doatkolom_border_color'] : 'rgba(0, 54, 70, .1)'
                    ],
                    'doatkolom_title_color'              => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Title', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_title_color'] ) ? $this->settings['doatkolom_title_color'] : '#003646'
                    ],
                    'doatkolom_sub_title_color'          => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Sub title', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_sub_title_color'] ) ? $this->settings['doatkolom_sub_title_color'] : '#003646'
                    ],
                    'doatkolom_title_description_color'  => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Title description', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_title_description_color'] ) ? $this->settings['doatkolom_title_description_color'] : '#335E6B'
                    ],
                    'doatkolom_paragraph_color'          => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Paragraph', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_paragraph_color'] ) ? $this->settings['doatkolom_paragraph_color'] : '#003646'
                    ],
                    'doatkolom_body_color'               => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Body', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_body_color'] ) ? $this->settings['doatkolom_body_color'] : '#ffffff'
                    ],
                    'doatkolom_footer_color'             => [
                        'type'    => 'color',
                        'label'   => esc_html__( 'Footer', 'doatkolom' ),
                        'default' => isset( $this->settings['doatkolom_footer_color'] ) ? $this->settings['doatkolom_footer_color'] : '#E7F4F6'
                    ]
                ]
            ],

            'doatkolom_auth_tab' => [
                'title'  => esc_html__( 'Authentication and Token Settings', 'doatkolom' ),
                'fields' => [
                    'auth_token' => [
                        'type'    => 'auth',
                        'label'   => esc_html__( 'Authentication Token', 'doatkolom' ),
                        'default' => isset( $this->settings['auth_token'] ) ? $this->settings['auth_token'] : [
                            'token'   => '',
                            'isvalid' => false
                        ]
                    ]
                ]
            ]

        ];
    }

    /**
     * @param $key
     * @param $default
     */
    private function getSettingDbValue( $key, $default = '' )
    {
        return isset( $this->settings[$key] ) ? $this->settings[$key] : $default;
    }

    /**
     * @param $input_id
     * @return mixed
     */
    public function get_attachment_url( $input_id )
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
}
