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
                'lato': ['Lato', 'sans-serif']
            },

            colors: {
                'primary': '#003646',
                'secondary': '#16AACA'
            }
        },
    },
}