const mix = require('laravel-mix');
const path = require('path');
require('mix-tailwindcss');

// transpile assets
mix.sass('resources/scss/fonts.scss', 'assets/css');
mix.sass('resources/scss/app.scss', 'assets/css').tailwind();
mix.ts('resources/typescript/app.ts', 'assets/js/');

/**
 * configuration
 */
mix.options({
    processCssUrls: false,
    manifest: false,
});

mix.browserSync({
    hot: true,
    ui: false,
    open: true,
    watch: true,
    https: true,
    files: ['./assets/js/*.js', './assets/css/*.css'],
    port: 8080,
    proxy: {
        target: 'https://x-currency.test',
        ws: true,
    },
});

mix.alias({
    '@': path.join(__dirname, 'src/'),
});

mix.webpackConfig({
    watchOptions: {
        ignored: ['/node_modules/', '/dist/'],
    },
    externals: {
        jquery: 'jQuery',
    },
    output: {
        chunkFilename: 'dist/chunk/[name].js',
    },
});
