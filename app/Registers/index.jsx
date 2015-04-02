'use strict';
var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

var Registers = React.createClass({
    render: function() {
        return <div>
            <div className='header'>
                <h1>Registers</h1>
                <h2>Subtitle</h2>
            </div>

            <div className='content'>
                <RouteHandler />
            </div>
        </div>;
    }
});

module.exports = Registers;

// TODO: add links to different registers
/*
<nav className="pure-menu pure-menu-open pure-menu-horizontal secondary">
    <ol>
        <li>
            <Link to='users'>Users</Link>
        </li>
        <li>
            <Link to='clients'>Clients</Link>
        </li>
        <li>
            <Link to='products'>Products</Link>
        </li>
        <li>
            <Link to='invoices'>Invoices</Link>
        </li>
    </ol>
</nav>
 */
