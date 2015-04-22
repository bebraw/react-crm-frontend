'use strict';
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var createCrud = require('../lib/Crud');
var Invoices = require('./Invoices');
var Layout = require('./Layout');


module.exports = function(api) {
    var crud = createCrud(api);
    var Users = crud('user');

    return (
        <Route name='registers' path='/registers' handler={Layout}>
            <Route name='users' path='/registers/users' handler={Users} />
            <Route name='clients' path='/registers/clients' handler={crud('client')} />
            <Route name='projects' path='/registers/projects' handler={crud('project')} />
            <Route name='products' path='/registers/products' handler={crud('product')} />
            <Route name='invoices' path='/registers/invoices' handler={Invoices} />

            <DefaultRoute handler={Users}/>
        </Route>
    );
};
