const mix = require('laravel-mix');
const path = require('path');
require('mix-tailwindcss');

mix.options({
    processCssUrls: false,
});

/**
 * compile tailwindcss
 */
mix.sass('src/app.scss', 'dist/css/').tailwind();
/**
 * compile typescript
 */
mix.ts('src/app.ts', 'dist/js/');

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
