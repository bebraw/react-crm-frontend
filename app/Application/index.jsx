'use strict';
var classNames = require('classnames');
var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

var Menu = require('react-pure-menu');
var MenuLink = require('lib/common.jsx').MenuLink;

require('purecss/build/pure.css');
require('reactabular/style.css');
require('react-pagify/style.css');
require('./skylight.css');
require('./side-menu.css');
require('./style.css');


module.exports = React.createClass({
    displayName: 'Application',

    getInitialState() {
        return {
            menuActive: false,
        };
    },

    render() {
        var menuActive = this.state.menuActive;

        return (
            <div id='layout' className={classNames({active: menuActive})}>
                <a href='#menu' id='menuLink'
                    className={classNames({active: menuActive, 'menu-link': true})}
                    onClick={this.menuLinkClicked}><span /></a>

                <div id='menu' className={classNames({active: menuActive})}>
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
            </div>
        );
    },

    menuLinkClicked(e) {
        e.preventDefault();

        this.setState({
            menuActive: !this.state.menuActive,
        });
    }
});
