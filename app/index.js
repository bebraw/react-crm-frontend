'use strict';

var React = require('react');
var Router = require('react-router');

var routes = require('./routes.jsx');


// react-router handles location
routes().then(function(routeDefinition) {
    Router.run(routeDefinition, Router.HistoryLocation, function(Application, state) {
        React.withContext({}, function() {
            React.render(<Application />, document.body);
        });
    });
}).catch(function(res) {
    console.error(res);
});
