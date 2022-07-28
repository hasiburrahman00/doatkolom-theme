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
            'current'       : 'currentColor',
            'transparent'   : "transparent",
            'primary'       : 'var(--doatkolom_primary_color)',
            'primary-80'    : 'var(--doatkolom_primary_color_80)',
            'primary-60'    : 'var(--doatkolom_primary_color_60)',
            'primary-20'    : 'var(--doatkolom_primary_color_20)',
            'primary-10'    : 'var(--doatkolom_primary_color_10)',
            'secondary'     : 'var(--doatkolom_secondary_color)',
            'white'         : "var(--doatkolom_white_color)",
            'white-90'      : "var(--doatkolom_white_color_90)",
            'black-90'      : "var(--doatkolom_black_color_90)",
            'gray-100'      : "var(--doatkolom_gray_100_color)",
            'gray-200'      : "var(--doatkolom_gray_200_color)",
            'gray-300'      : "var(--doatkolom_gray_300_color)",
            'gray-400'      : "var(--doatkolom_gray_400_color)",
            'gray-500'      : "var(--doatkolom_gray_500_color)",
            'slate-300'     : "var(--doatkolom_slate_300_color)",
            'slate-200'     : "var(--doatkolom_slate_200_color)",
            'slate-100'     : "var(--doatkolom_slate_100_color)",
            'teal-100'      : "var(--doatkolom_teal_100_color)",
            'blue-100'      : "var(--doatkolom_blue_100_color)",
            'blue-600'      : "var(--doatkolom_blue_600_color)",
            'green-600'     : "var(--doatkolom_green_600_color)",
            'red-100'       : "var(--doatkolom_red_100_color)",
            'red-500'       : "var(--doatkolom_red_500_color)",
            'red-600'       : "var(--doatkolom_red_600_color)",
            'paste-green'   : "var(--doatkolom_paste_green_color)",
            'paste-green-400'   : "var(--doatkolom_paste_green_400_color)",
            'paste-blue-400'    : "var(--doatkolom_paste_blue_400_color)",
            'paste-blue-100'    : "var(--doatkolom_paste_blue_100_color)",
            'primary-blue-100'  : "var(--doatkolom_primary_blue_100_color)",
            'pink-100'          : "var(--doatkolom_pink_100_color)",
        },

        fontFamily: {
            'primary': ['var(--primary_font_family)'],
            'secondary': ['var(--secondary_font_family)'],
        },

        lineHeight: {
            '12': '48px',
            '14': '56px',
        },
        fontWeight: {
            weight_primary: 'var(--primary_font_weight)',
            weight_secondary: 'var(--secondary_font_weight)',
            weight_tertiary: 'var(--tertiary_font_weight)'
        }
    },
}