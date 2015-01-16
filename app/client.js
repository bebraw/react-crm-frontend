'use strict';
var axios = require('axios');
var swaggerClient = require('swagger2client');


module.exports = function() {
    var rootUrl = 'http://localhost:3000'; // TODO: move this to configuration

    axios.all([
        getSchema(rootUrl),
        getToken(rootUrl)
    ]).then(axios.spread(function(schema, token) {
        var client = swaggerClient({
            url: rootUrl,
            schema: schema.data,
            headers: {
                'Authorization': 'Bearer ' + token.data.token
            }
        });

        client.clients.get().then(function(res) {
            console.log('clients', res.data);
        });
    })).catch(function(res) {
        console.error(res);
    });
};

function getSchema(url) {
    return axios.get(url + '/v1/schema');
}

function getToken(url) {
    return axios.post(url + '/authenticate');
}
