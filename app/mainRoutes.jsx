'use strict';
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;


if(!Object.assign) {
    Object.assign = React.__spread;
}

module.exports = (
    <Route name='app' path='/' handler={require('./Application')}>
        <Route name='dashboard' path='/dashboard' handler={require('./Dashboard')} />
        <Route name='registers' path='/registers' handler={require('./Registers')} />
        <Route name='contracts' path='/contracts' handler={require('./Contracts')} />

        <DefaultRoute name='home' handler={require('./Home')} />
    </Route>
);
