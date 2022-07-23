const mix = require('laravel-mix');

mix.options({ 
    processCssUrls: false,
});

mix.sass('src/frontend.scss', 'build/frontend.min.css');
mix.js('src/frontend.js', 'build/frontend.min.js')
mix.js('src/gutenberg.js', 'build/gutenberg.min.js').react();
mix.js('src/admin/index.js', 'build/admin.min.js').react();
mix.js('src/app.js', 'build/app.min.js').react();

mix.webpackConfig({
    externals: {
        "jquery": "jQuery"
    },
    output: {
        chunkFilename: 'build/chunk/[name].js',
    }
})