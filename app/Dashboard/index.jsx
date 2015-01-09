'use strict';
var React = require('react');
var Link = require('react-router').Link;


var Dashboard = React.createClass({
    render: function() {
        return <div>
            <h2>Dashboard</h2>
            <Link to='home'>Home</Link>
            <p>This is the dashboard</p>
        </div>;
    }
});

module.exports = Dashboard;
