'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

require('./style.css');

var Application = React.createClass({
    mixins: [],
    render: function() {
        return <div>
            <header>
                <nav className="primary">
                    <ol>
                        <li>
                            <Link to='dashboard'>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='clients'>Registers</Link>
                        </li>
                        <li>
                            <Link to='contracts'>Contracts</Link>
                        </li>
                    </ol>
                </nav>
            </header>

            <article>
                <RouteHandler />
            </article>
        </div>;
    }
});
module.exports = Application;
