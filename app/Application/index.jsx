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

    contextTypes: {
      router: React.PropTypes.func
    },

    getInitialState() {
        return {
            menuActive: false,
        };
    },

    render() {
        const menuActive = this.state.menuActive;
        const pathName = this.context.router.getCurrentPathname();
        const inRegisters = pathName.startsWith('/registers');

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

                                {inRegisters?
                                <Menu.List className='submenu'>
                                    <Menu.Item>
                                        <MenuLink to='users'>Users</MenuLink>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <MenuLink to='clients'>Clients</MenuLink>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <MenuLink to='projects'>Projects</MenuLink>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <MenuLink to='products'>Products</MenuLink>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <MenuLink to='invoices'>Invoices</MenuLink>
                                    </Menu.Item>
                                </Menu.List>
                                : null}

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
