'use strict';

var React = require('react');
var Router = require('react-router');
var Promise = require('es6-promise').Promise;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Application = require('./Application');
var Dashboard = require('./Dashboard');
var Registers = require('./Registers');
var Products = require('./Registers/Products');
var Invoices = require('./Registers/Invoices');
var Contracts = require('./Contracts');
var Home = require('./Home');

var url = 'http://localhost:3000'; // TODO: move this to configuration
var createApi = require('./api');


module.exports = function() {
    return new Promise(function(resolve, reject) {
        createApi(url).then(function(api) {
            var Users = require('./Registers/Users')(api);
            var Clients = require('./Registers/Clients')(api);

            resolve(
                <Route name='app' path='/' handler={Application}>
                    <Route name='dashboard' path='/dashboard' handler={Dashboard} />
                    <Route name='registers' path='/registers' handler={Registers}>
                        <Route name='users' path='/registers/users' handler={Users} />
                        <Route name='clients' path='/registers/clients' handler={Clients} />
                        <Route name='products' path='/registers/products' handler={Products} />
                        <Route name='invoices' path='/registers/invoices' handler={Invoices} />

                        <DefaultRoute handler={Users}/>
                    </Route>
                    <Route name='contracts' path='/contracts' handler={Contracts} />

                    <DefaultRoute name='home' handler={Home} />
                </Route>
            );
        }).catch(function(res) {
            reject(res);
        });
    });
};
