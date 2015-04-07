'use strict';

var React = require('react');
var Router = require('react-router');

var routes = require('./routes.jsx');


routes().then(function(routeDefinition) {
    Router.run(routeDefinition, Router.HistoryLocation, function(Application) {
        React.render(<Application />, document.body);
    });
}).catch(function(res) {
    console.error(res);
});
