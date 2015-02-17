'use strict';
var Promise = require('es6-promise').Promise;
var axios = require('axios');


module.exports = function(url) {
    return new Promise(function(resolve, reject) {
        axios.get(url + '/v1/schema').then(function() {
            resolve();
        }).catch(function(res) {
            reject(res);
        });
    });
};
