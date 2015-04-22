'use strict';

var React = require('react');
var Router = require('react-router');
var Promise = require('es6-promise').Promise;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Application = require('./Application');
var Dashboard = require('./Dashboard');
var Home = require('./Home');
var contracts = require('./Contracts');
var registers = require('./Registers');

var url = 'http://localhost:3000'; // TODO: move this to configuration
var createApi = require('./api');


module.exports = function() {
    return new Promise(function(resolve, reject) {
        createApi(url).then(function(api) {
            resolve(
                <Route name='app' path='/' handler={Application}>
                    <Route name='dashboard' path='/dashboard' handler={Dashboard} />
                    {contracts(api)}
                    {registers(api)}

                    <DefaultRoute name='home' handler={Home} />
                </Route>
            );
        }).catch(function(res) {
            reject(res);
        });
    });
};
