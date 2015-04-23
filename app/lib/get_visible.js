'use strict';
var _ = require('lodash');


module.exports = function(properties) {
    var ret = {};

    _.forEach(properties, function(v, k) {
        if(!v.readOnly) {
            ret[k] = v;
        }
    });

    return ret;
};
