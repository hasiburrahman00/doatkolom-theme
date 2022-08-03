<?php

namespace DoatKolom;

defined( 'ABSPATH' ) || exit;

class Contact
{
    public function __construct()
    {
        add_action( 'init', [$this, 'register_contact_post_type'] );
        add_action( 'add_meta_boxes', [$this, 'add_meta_box'] );
        add_filter( 'post_row_actions', [$this, 'contact_actions'], 10, 2 );
        add_action( 'manage_' . DOATKOLOM_CONTACT_POST_TYPE . '_posts_custom_column', [$this, 'custom_column_value'], 10, 2 );
        add_filter( 'manage_' . DOATKOLOM_CONTACT_POST_TYPE . '_posts_columns', [$this, 'custom_columns'] );
        add_action( 'admin_enqueue_scripts', [$this, 'enqueue_scripts'] );
    }

    public function enqueue_scripts()
    {
        wp_enqueue_script( 'doatkolom-contact-admin', DOATKOLOM_THEME_URI . '/assets/js/menu.js', ['jquery'], '1.0.0', true );
        wp_localize_script( 'doatkolom-contact-admin', 'doatkolom_contact_admin', [
            'admin_url' => admin_url()
        ] );
        wp_enqueue_style( 'doatkolom-contact-admin', DOATKOLOM_THEME_URI . '/assets/css/contact-info.css', [], '1.0.0' );
    }

    public function register_contact_post_type()
    {
        $labels = [
            'name' => esc_html__( 'Contact', 'doatkolom-theme' )
        ];

        $args = [
            'label'               => esc_html__( 'Contact', 'doatkolom-theme' ),
            'labels'              => $labels,
            'supports'            => ['title'],
            'menu_icon'           => 'dashicons-email',
            'hierarchical'        => false,
            'public'              => false,
            'show_ui'             => true,
            'show_in_admin_bar'   => false,
            'show_in_nav_menus'   => false,
            'can_export'          => true,
            'has_archive'         => false,
            'query_var'           => false,
            'exclude_from_search' => false,
            'publicly_queryable'  => false,
            'capability_type'     => 'page',
            'show_in_rest'        => false,
            'menu_position'       => 58.9,
            'show_in_menu'        => 'doatkolom-theme-settings',
            'capabilities'        => [
                'create_posts' => 'do_not_allow'
            ],
            'map_meta_cap'        => true
        ];
        register_post_type( DOATKOLOM_CONTACT_POST_TYPE, $args );
    }

    /**
     * @param $column
     * @param $post_id
     */
    public function custom_column_value( $column, $post_id )
    {
        echo get_post_meta( $post_id, $column, true );
    }

    /**
     * @param $columns
     */
    public function custom_columns( $columns )
    {
        $date = $columns['date'];
        unset( $columns['date'] );
        $custom_columns = [
            'full_name' => esc_html__( 'Name', 'doatkolom-theme' ),
            'email'     => esc_html__( 'Email', 'doatkolom-theme' ),
            'phone'     => esc_html__( 'Phone', 'doatkolom-theme' ),
            'location'  => esc_html__( 'Location', 'doatkolom-theme' ),
            'date'      => $date
        ];
        return array_merge( $columns, $custom_columns );
    }

    /**
     * @param $actions
     * @param $post
     * @return mixed
     */
    public function contact_actions( $actions, $post )
    {
        unset( $actions['inline hide-if-no-js'], $actions['edit'] );
        $edit = ['edit' => '<a href="' . get_edit_post_link( $post->ID ) . '">' . esc_html__( 'View', 'doatkolom-theme' ) . '</a>'];
        return $edit + $actions;
    }

    public function add_meta_box()
    {
        add_meta_box( 'doatkolom_contact_info', esc_html__( 'Contact Info', 'doatkolom-theme' ), [$this, 'meta_box_content'], DOATKOLOM_CONTACT_POST_TYPE );
    }

    /**
     * @param $post
     */
    public function meta_box_content( $post )
    {
    ?>
    <table class="doatkolom-contact-info">
        <tbody>
            <tr>
                <th><?php esc_html_e( 'Name', 'doatkolom-theme' )?></th>
                <td><?php echo get_post_meta( $post->ID, 'full_name', true ) ?></td>
            </tr>
            <tr>
                <th><?php esc_html_e( 'Email', 'doatkolom-theme' )?></th>
                <td><?php echo get_post_meta( $post->ID, 'email', true ) ?></td>
            </tr>
            <tr>
                <th><?php esc_html_e( 'Phone', 'doatkolom-theme' )?></th>
                <td><?php echo get_post_meta( $post->ID, 'phone', true ) ?></td>
            </tr>
            <tr>
                <th><?php esc_html_e( 'Location', 'doatkolom-theme' )?></th>
                <td><?php echo get_post_meta( $post->ID, 'location', true ) ?></td>
            </tr>
            <tr>
                <th><?php esc_html_e( 'Message', 'doatkolom-theme' )?></th>
                <td><?php echo get_post_meta( $post->ID, 'message', true ) ?></td>
            </tr>
        </tbody>
    </table>
    <?php
    }
}
