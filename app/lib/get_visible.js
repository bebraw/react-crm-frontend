'use strict';
var _ = require('lodash');

var i18n = {
    'en-en': 'English',
    'fi-fi': 'Finnish',
};


module.exports = function(properties) {
    var ret = {};

    _.forEach(properties, function(v, k) {
        if(!v.readOnly) {
            ret[k] = v;
        }

        if(v.enum) {
            ret[k].enumNames = v.enum.map((o) => i18n[o]);
        }
    });

    return ret;
};
