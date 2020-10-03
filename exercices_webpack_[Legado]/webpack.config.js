const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './ex/index.js',
    output: {
        filename: './script.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: './public',
        port: 8000
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
    ],
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]
    }
}