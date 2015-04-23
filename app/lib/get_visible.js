'use strict';
var async = require('async');

var i18n = {
    'en-en': 'English',
    'fi-fi': 'Finnish',
};


module.exports = function(api, properties, cb) {
    var resources = Object.keys(api).map((s) => s.slice(0, -1));
    var ret = {};

    async.each(Object.keys(properties), (k, cb) => {
        var v = properties[k];

        if(!v.readOnly) {
            ret[k] = v;
        }

        if(v.enum) {
            ret[k].enumNames = v.enum.map((o) => i18n[o]);

            cb();
        }
        else if(resources.indexOf(k) >= 0) {
            api[k + 's'].get().then((d) => {
                var data = d.data;

                ret[k].enum = data.map((v) => v.id);
                ret[k].enumNames = data.map((v) => v.name);

                cb();
            }).catch(cb);
        }
        else {
            cb();
        }
    }, (err) => {
        if(err) {
            return cb(err);
        }

        cb(null, ret);
    });
};
