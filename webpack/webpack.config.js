const modeDev = process.env.NODE_ENV !== 'production' ? 'development' : 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: modeDev,
    entry: './src/main.js',
    output: { // Default is ./dist/main.js
        filename: 'standard.js',
        path: `${__dirname}/public`
    },
    devServer: {
        contentBase: './public',
        port: 8000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader', // Add Css to DOM injecting the tag <style></style>
                    'css-loader', // Read @import, url()...
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: ['file-loader']
            }
        ]
    }
};