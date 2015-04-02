'use strict';
var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

var Menu = require('../lib/menu.jsx');


module.exports = React.createClass({
    render: function() {
        return <div>
            <div className='header'>
                <h1>Registers</h1>
                <Menu className='pure-menu-horizontal'>
                    <Menu.List>
                        <Menu.Item to='users'>Users</Menu.Item>
                        <Menu.Item to='clients'>Clients</Menu.Item>
                        <Menu.Item to='products'>Products</Menu.Item>
                        <Menu.Item to='invoices'>Invoices</Menu.Item>
                    </Menu.List>
                </Menu>
            </div>

            <div className='content'>
                <RouteHandler />
            </div>
        </div>;
    }
});
