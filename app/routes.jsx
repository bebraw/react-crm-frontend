'use strict';

var React = require('react');
var Promise = require('es6-promise').Promise;

var url = 'http://localhost:3000'; // TODO: move this to configuration
var api = require('./api');


module.exports = function() {
    return new Promise(function(resolve, reject) {
        api(url).then(function(api) {
            resolve();
        }).catch(function(res) {
            reject(res);
        });
    });
};
