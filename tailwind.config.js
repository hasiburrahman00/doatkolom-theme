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
            primary: ['Lato', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#0073E6',
                ['primary-dark']: '#025fbd',
                secondary: '#1A202C',
            },
            backgroundImage: {
                ['banner-pattern']: 'url(../images/home/map-pattern.png)',
                ['post-pattern']: 'url(../images/common/bg-pattern.png)',
                ['banner-overlay']: 'linear-gradient(90deg, rgba(255, 255, 255, 0.87) 19.55%, rgba(255, 255, 255, 0.90) 82.04%)',
                ['banner-overlay-mobile']: 'linear-gradient(180deg, rgba(255, 255, 255, 0.90) 19.55%, rgba(255, 255, 255, 0.90) 82.04%)'
            },
            backgroundSize: {
                ['banner-size']: '400px'
            },
            boxShadow: {
                base: '0px 20px 40px -4px rgba(145, 158, 171, 0.12)'
            }
        }
    },
    plugins: [],
};
