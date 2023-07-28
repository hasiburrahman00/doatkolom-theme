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
        container: {
            center: true,
            padding: '15px',
            screens: {
                sm: '575px',
                md: '768px',
                lg: '991px',
                xl: '1280px',
            },
        },
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#0073E6',
                ['primary-dark']: '#025fbd',
                secondary: '#1A202C',
            }
        }
    },
    plugins: [],
};
