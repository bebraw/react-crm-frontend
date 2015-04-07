'use strict';

var React = require('react');
var Router = require('react-router');
var Promise = require('es6-promise').Promise;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Application = require('./Application');
var Dashboard = require('./Dashboard');
var Registers = require('./Registers');
var Invoices = require('./Registers/Invoices');
var Contracts = require('./Contracts');
var Home = require('./Home');

var url = 'http://localhost:3000'; // TODO: move this to configuration
var createApi = require('./api');


module.exports = function() {
    return new Promise(function(resolve, reject) {
        createApi(url).then(function(api) {
            var crud = require('./lib/Crud')(api);
            var Users = crud('user');

            resolve(
                <Route name='app' path='/' handler={Application}>
                    <Route name='dashboard' path='/dashboard' handler={Dashboard} />
                    <Route name='registers' path='/registers' handler={Registers}>
                        <Route name='users' path='/registers/users' handler={Users} />
                        <Route name='clients' path='/registers/clients' handler={crud('client')} />
                        <Route name='projects' path='/registers/projects' handler={crud('project')} />
                        <Route name='products' path='/registers/products' handler={crud('product')} />
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
