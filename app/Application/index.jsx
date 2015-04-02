'use strict';
var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

var Menu = require('../lib/menu.jsx');
var MenuLink = require('../lib/common.jsx').MenuLink;

require('purecss/build/pure.css');
require('reactabular/style.css');
require('react-pagify/style.css');
require('./skylight.css');
require('./side-menu.css');
require('./style.css');


var Application = React.createClass({
    render: function() {
        return <div id='layout'>
            <a href='#menu' id='menuLink' className='menu-link'><span /></a>

            <div id='menu'>
                <Menu>
                    <Menu.Heading>Koodilehto</Menu.Heading>

                    <Menu.List>
                        <Menu.Item>
                            <MenuLink to='dashboard'>Dashboard</MenuLink>
                        </Menu.Item>
                        <Menu.Item>
                            <MenuLink to='registers'>Registers</MenuLink>
                        </Menu.Item>
                        <Menu.Item>
                            <MenuLink to='contracts'>Contracts</MenuLink>
                        </Menu.Item>
                    </Menu.List>
                </Menu>
            </div>

            <div id='main'>
                <RouteHandler />
            </div>
        </div>;
    }
});
module.exports = Application;
