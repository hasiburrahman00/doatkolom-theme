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
                'primary-dark': '#025fbd',
                secondary: '#1A202C',
            },
            backgroundImage: {
                'post-pattern': 'url(../images/common/bg-pattern.png)',
                banner: 'url(../images/x-currency/hero-area.webp)',
                primary: ' linear-gradient(180deg, #517DFC 0%, #0A42C6 100%)',
                'home-banner': 'url(../images/home/hero-gradient.webp)',
            },
            backgroundSize: {
                ['banner-size']: '400px'
            },
            boxShadow: {
                base: '0px 20px 40px -4px rgba(145, 158, 171, 0.12)',
                btn: '0px 1px 0px 0px #092E97',
                community: '0px 1px 0px 0px #092E97',
                screenshot: '0px 16.38722px 38.23685px -3.32865px rgba(40, 45, 62, 0.16)',
                card: '8px 24px 40px 8px rgba(0, 0, 0, 0.08)',
                'core-value': '0px 8px 24px 0px rgba(0, 0, 0, 0.08)',
                employee: '0px 20px 40px -4px rgba(145, 158, 171, 0.12)',
            },
            dropShadow: {
                'counter': '0px 8px 24px rgba(0, 0, 0, 0.08)'
            },
        }
    },
    plugins: [],
};
