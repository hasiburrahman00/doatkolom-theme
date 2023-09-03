const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
    ...defaultConfig,
    entry: {
        app: './resources/gutenberg/app.js',
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
        clean: false,
    },
    resolve: {
        alias: {
            '@gutenberg': path.resolve(__dirname, './resources/gutenberg'),
        },
    },
};