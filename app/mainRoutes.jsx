'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Application = require('./Application');
var Dashboard = require('./Dashboard');
var Registers = require('./Registers');
var Clients = require('./Registers/Clients');
var Products = require('./Registers/Products');
var Invoices = require('./Registers/Invoices');
var Contracts = require('./Contracts');
var Home = require('./Home');


module.exports = (
    <Route name='app' path='/' handler={Application}>
        <Route name='dashboard' path='/dashboard' handler={Dashboard} />
        <Route name='registers' path='/registers' handler={Registers}>
            <Route name='clients' path='/registers/clients' handler={Clients} />
            <Route name='products' path='/registers/products' handler={Products} />
            <Route name='invoices' path='/registers/invoices' handler={Invoices} />

            <DefaultRoute handler={Clients}/>
        </Route>
        <Route name='contracts' path='/contracts' handler={Contracts} />

        <DefaultRoute name='home' handler={Home} />
    </Route>
);
