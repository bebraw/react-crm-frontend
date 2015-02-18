'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

require('purecss/pure.css');
require('reactabular/style.css');
require('./skylight.css');
require('./style.css');


var Application = React.createClass({
    mixins: [],
    render: function() {
        return <div className='pure-g main'>
            <header className='pure-u-1'>
                <nav className="pure-menu pure-menu-open pure-menu-horizontal primary">
                    <ol>
                        <li>
                            <Link to='dashboard'>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='registers'>Registers</Link>
                        </li>
                        <li>
                            <Link to='contracts'>Contracts</Link>
                        </li>
                    </ol>
                </nav>
            </header>

            <article className='pure-u-1'>
                <RouteHandler />
            </article>

            <footer className='pure-u-1'><p>footer</p></footer>
        </div>;
    }
});
module.exports = Application;
