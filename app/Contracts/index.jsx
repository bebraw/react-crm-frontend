'use strict';
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Layout = require('./Layout');


module.exports = function() {
    return (
        <Route name='contracts' path='/contracts' handler={Layout} />
    );
};
