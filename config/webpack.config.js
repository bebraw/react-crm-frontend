'use strict';
var path = require('path');

var extend = require('xtend');
var webpack = require('webpack');

var common = require('./webpack.common');


module.exports = extend(common, {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:4000',
        'webpack/hot/only-dev-server',
        './app/index',
    ],
    resolve: {
        extensions: common.resolve.extensions,
        alias: {
            'lib': path.join(__dirname, '../app/lib'),
        }
    },
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: common.loaders.concat([{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel?stage=0'],
            exclude: /node_modules/,
        }])
    }
});
