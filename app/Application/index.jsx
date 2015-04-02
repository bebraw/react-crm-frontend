'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

require('purecss/build/pure.css');
require('reactabular/style.css');
require('react-pagify/style.css');
require('./skylight.css');
require('./side-menu.css');
require('./style.css');


var MenuLink = React.createClass({
    render: function() {
        return (
            <Link className='pure-menu-link' to={this.props.to}>
                {this.props.children}
            </Link>
        );
    },
});

// TODO: set pure-menu-selected on li when Link is clicked
var MenuItem = React.createClass({
    render: function() {
        return (
            <li className='pure-menu-item'>
                <MenuLink to={this.props.to}>{this.props.children}</MenuLink>
            </li>
        );
    },
});

var Application = React.createClass({
    render: function() {
        return <div id='layout'>
            <a href='#menu' id='menuLink' className='menu-link'><span /></a>

            <div id='menu'>
                <div className='pure-menu'>
                    <a className='pure-menu-heading' href='#'>Koodilehto</a>

                    <ul className='pure-menu-list'>
                        <MenuItem to='dashboard'>Dashboard</MenuItem>
                        <MenuItem to='registers'>Registers</MenuItem>
                        <MenuItem to='contracts'>Contracts</MenuItem>
                    </ul>
                </div>
            </div>

            <div id='main'>
                <RouteHandler />
            </div>
        </div>;
    }
});
module.exports = Application;
