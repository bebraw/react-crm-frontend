'use strict';
var titleCase = require('title-case');
var zip = require('annozip');


module.exports = function(o) {
    return zip.toObject(zip(o).map((pair) => {
        pair[1].title = titleCase(pair[0]);

        return pair;
    }));
};
