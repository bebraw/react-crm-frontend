'use strict';

var React = require('react');
var Link = require('react-router').Link;


module.exports = React.createClass({
    render: function() {
        return <div>
            <p>Login form should go here. Temporary navigation below.</p>
            <ul>
                <li>
                    <Link to='dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link to='registers'>Registers</Link>
                </li>
                <li>
                    <Link to='contracts'>Contracts</Link>
                </li>
            </ul>
        </div>;
    }
});
