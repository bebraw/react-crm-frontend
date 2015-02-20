'use strict';
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./config/webpack.config');


var port = 4000;
var ip = '0.0.0.0';
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
}).listen(port, ip, function (err) {
    if(err) {
        return console.log(err);
    }

    console.log('Listening at ' + ip + ':' + port);
});
