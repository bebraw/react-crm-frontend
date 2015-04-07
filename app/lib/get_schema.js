'use strict';
var generateTitles = require('./generate_titles');


module.exports = function(endpoint) {
    var schema = endpoint.get.responses['200'].schema;

    schema.type = 'object';
    schema.properties = generateTitles(schema.properties);

    return schema;
};
