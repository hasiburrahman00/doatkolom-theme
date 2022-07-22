const mix = require('laravel-mix');
const path = require('path');

mix.options({ 
    processCssUrls: false,
});

mix.sass('src/frontend.scss', 'build/frontend.min.css');
mix.js('src/frontend.js', 'build/frontend.min.js')
mix.js('src/gutenberg.js', 'build/gutenberg.min.js').react();
mix.js('src/admin/index.js', 'build/admin.min.js').react();
mix.js('src/app.js', 'build/app.min.js').react();

console.log(path.resolve(__dirname, './'))

mix.webpackConfig({
    externals: {
        "jquery": "jQuery"
    },
    output: {
        path: path.resolve(__dirname, './'),
        chunkFilename: 'build/chunk/[name].js',
    }
})