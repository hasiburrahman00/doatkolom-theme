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
            'primary'       : 'var(--doatkolom-primary-color)',
            'primary-80'    : 'var(--doatkolom-primary-color-80)',
            'primary-60'    : 'var(--doatkolom-primary-color-60)',
            'primary-20'    : 'var(--doatkolom-primary-color-20)',
            'primary-10'    : 'var(--doatkolom-primary-color-10)',
            'secondary'     : 'var(--doatkolom-secondary-color)',
            'white'         : "var(--doatkolom-white-color)",
            'white-90'      : "var(--doatkolom-white-color-90)",
            'gray-100'      : "var(--doatkolom-gray-100-color)",
            'gray-200'      : "var(--doatkolom-gray-200-color)",
            'gray-300'      : "var(--doatkolom-gray-300-color)",
            'gray-400'      : "var(--doatkolom-gray-400-color)",
            'slate-300'     : "var(--doatkolom-slate-300-color)",
            'slate-200'     : "var(--doatkolom-slate-200-color)",
            'slate-100'     : "var(--doatkolom-slate-100-color)",
            'teal-100'      : "var(--doatkolom-teal-100-color)",
            'blue-600'      : "var(--doatkolom-blue-600-color)",
            'green-600'     : "var(--doatkolom-green-600-color)",
            'red-600'       : "var(--doatkolom-red-600-color)",
            'paste-green'   : "var(--doatkolom-paste-green-color)",
            'paste-green-400': "var(--doatkolom-paste-green-400-color)",
            'paste-blue-400': "var(--doatkolom-paste-blue-400-color)",
            'paste-blue-100': "var(--doatkolom-paste-blue-100-color)",
        },

        fontFamily: {
            'primary': ['Abril Fatface', 'cursive'],
            'secondary': ['Spectral', 'serif'],
        },

        lineHeight: {
            '12': '48px',
            '14': '56px',
        }
    },
}