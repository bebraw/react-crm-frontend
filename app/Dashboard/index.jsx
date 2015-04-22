'use strict';
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Layout = require('./Layout');


module.exports = function() {
    return (
        <Route name='dashboard' path='/dashboard' handler={Layout} />
    );
};
