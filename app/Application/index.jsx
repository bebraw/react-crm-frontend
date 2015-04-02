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


var Application = React.createClass({
    render: function() {
        return <div id='layout'>
            <a href='#menu' id='menuLink' className='menu-link'><span /></a>

            <div id='menu'>
                <div className='pure-menu'>
                    <a className='pure-menu-heading' href='#'>Koodilehto</a>

                    <ul className='pure-menu-list'>
                        <li className='pure-menu-item pure-menu-selected'>
                            <Link className='pure-menu-link' to='dashboard'>Dashboard</Link>
                        </li>
                        <li className='pure-menu-item'>
                            <Link className='pure-menu-link' to='registers'>Registers</Link>
                        </li>
                        <li className='pure-menu-item'>
                            <Link className='pure-menu-link' to='contracts'>Contracts</Link>
                        </li>
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
