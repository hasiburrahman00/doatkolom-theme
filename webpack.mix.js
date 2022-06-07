const mix = require('laravel-mix');

mix.options({ processCssUrls: false });
mix.sass('src/frontend.scss', 'build/frontend.min.css')
mix.js('src/gutenberg.js', 'build/gutenberg.min.js').react();
mix.js('src/admin.js', 'build/admin.min.js').react();
mix.js('src/app.js', 'build/app.min.js').react();

mix.js('src/frontend.js', 'build/frontend.min.js')
.webpackConfig({
  externals: {
      "jquery": "jQuery"
  },
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              loader: "ts-loader",
              exclude: /node_modules/
          }
      ]
  },
  resolve: {
      extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
  }
})