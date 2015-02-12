'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('../app/' + __resourceQuery.substr(1) + 'Routes');
var html = require('../app/prerender.html');


module.exports = function(path, readItems, scriptUrl, styleUrl, commonsUrl, callback) {
    // run the path thought react-router
    routes().then(function(routeDefinition) {
        Router.run(routeDefinition, path, function(Application, state) {
            // prerender the application
            var application = React.withContext({}, function() {
                return React.renderToString(<Application />);
            });

            // format the full page
            callback(null, html
                .replace('STYLE_URL', styleUrl)
                .replace('SCRIPT_URL', scriptUrl)
                .replace('COMMONS_URL', commonsUrl)
                .replace('CONTENT', application));
        });
    }).catch(function(res) {
        console.error(res);
    });
};
