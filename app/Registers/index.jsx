'use strict';
var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

var Registers = React.createClass({
    render: function() {
        return <div>
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

            <RouteHandler />
        </div>;
    }
});

module.exports = Registers;
