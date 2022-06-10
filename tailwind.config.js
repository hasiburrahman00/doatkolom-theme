module.exports = {
    mode: 'jit',
    purge: {
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
            './src/**/*.js',
            './tailwind-purge-safelist.txt',
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'primary': ['Abril Fatface', 'cursive'],
                'secondary': ['Spectral', 'serif'],
            },

            colors: {
                'primary': '#003646',
                'secondary': '#16AACA',
                'doatkolom-gray': '#e6e6e6',
            },
            
            lineHeight: {
                '12': '48px',
                '14': '56px',
            }
        },
    },
}