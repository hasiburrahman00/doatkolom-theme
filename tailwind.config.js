module.exports = {
    content: [
        './functions.php',
        './header.php',
        './404.php',
        './footer.php',
        './index.php',
        './page.php',
        './single.php',
        './search.php',
        './author.php',
        './sidebar.php',
        './templates/**/*.php',
        './template-parts/**/*.php',
        './app/**/*.php',
        './src/**/*.js'
    ],

    theme: {
        colors: {
            'current'           : 'currentColor',
            'transparent'       : "transparent",
            'primary'           : 'var(--doatkolom_primary_color)',
            'primary_opacity_80': 'var(--doatkolom_primary_opacity_80_color)',
            'primary-opacity-60': 'var(--doatkolom_primary_opacity_60_color)',
            'primary-light'     : 'var(--doatkolom_primary_light_color)',
            'primary-dark'      : 'var(--doatkolom_primary_dark_color)',
            'primary_shadow'    : 'var(--doatkolom_primary_shadow_color)',
            'secondary'         : "var(--doatkolom_secondary_color)",
            'secondary_shadow'  : "var(--doatkolom_secondary_shadow_color)",
            'white'             : "var(--doatkolom_white_color)",
            'black'             : "var(--doatkolom_black_color)",
            'gray'              : "var(--doatkolom_gray_color)",
            'light_gray'        : "var(--doatkolom_light_gray_color)",
            'overlay'           : "var(--doatkolom_overlay_color)",
            'border'            : "var(--doatkolom_border_color)",
            'title'             : "var(--doatkolom_title_color)",
            'sub_title'         : "var(--doatkolom_sub_title_color)",
            'title_description' : "var(--doatkolom_title_description_color)",
            'paragraph'         : "var(--doatkolom_paragraph_color)",
            'body'              : "var(--doatkolom_body_color)",
        },

        fontFamily: {
            'primary'   : ['var(--primary_font_family)'],
            'secondary' : ['var(--secondary_font_family)'],
        },

        lineHeight: {
            '12': '48px',
            '14': '56px',
        },
        fontWeight: {
            weight_primary  : 'var(--primary_font_weight)',
            weight_secondary: 'var(--secondary_font_weight)',
            weight_tertiary : 'var(--tertiary_font_weight)'
        }
    },
}