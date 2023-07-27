/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'header.php',
        'footer.php',
        'index.php',
        'page.php',
        'single.php',
        'archive.php',
        'search.php',
        '404.php',
        './app/*.php',
        './templates/*.php',
        './views/**/*.php',
        './src/**/*.ts',
    ],
    theme: {
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#0073E6',
                secondary: '#1A202C',
            }
        }
    },
    plugins: [],
};
