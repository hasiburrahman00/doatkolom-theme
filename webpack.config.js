const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    ...defaultConfig,
    entry: {
        app: './src/gutenberg/index.ts',
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
        clean: false,
    },
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json',
                            transpileOnly: false,
                            compilerOptions: {
                                noEmit: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            '@gutenberg': path.resolve(__dirname, './src/gutenberg'),
        },
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
        extensions: [
            '.ts',
            '.tsx',
            ...(defaultConfig.resolve
                ? defaultConfig.resolve.extensions || ['.js', '.jsx']
                : []),
        ],
    },
};
