'use strict';
var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

var Menu = require('react-pure-menu');
var MenuLink = require('lib/common.jsx').MenuLink;


module.exports = React.createClass({
    displayName: 'Registers',

    render() {
        return (
            <div>
                <div className='header'>
                    <h1>Registers</h1>
                    <Menu className='pure-menu-horizontal'>
                        <Menu.List>
                            <Menu.Item>
                                <MenuLink to='users'>Users</MenuLink>
                            </Menu.Item>
                            <Menu.Item>
                                <MenuLink to='clients'>Clients</MenuLink>
                            </Menu.Item>
                            <Menu.Item>
                                <MenuLink to='products'>Products</MenuLink>
                            </Menu.Item>
                            <Menu.Item>
                                <MenuLink to='invoices'>Invoices</MenuLink>
                            </Menu.Item>
                        </Menu.List>
                    </Menu>
                </div>

                <div className='content'>
                    <RouteHandler />
                </div>
            </div>
        );
    }
});
