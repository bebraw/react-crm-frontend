'use strict';

var React = require('react');
var Router = require('react-router');

var routes = require('./routes.jsx');


// XXX: yields Uncaught NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
// when developing
routes().then(function(routeDefinition) {
    Router.run(routeDefinition, Router.HistoryLocation, function(Application, state) {
        React.render(<Application />, document.body);
    });
}).catch(function(res) {
    console.error(res);
});
