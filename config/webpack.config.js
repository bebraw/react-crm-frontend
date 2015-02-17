'use strict';
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
            test: /\.(js|jsx)$/,
            loaders: ['react-hot', 'jsx?harmony'],
            exclude: /node_modules/,
        }])
    }
});
