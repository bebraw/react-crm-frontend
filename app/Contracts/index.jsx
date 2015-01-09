'use strict';
var React = require('react');
var Link = require('react-router').Link;


var Contracts = React.createClass({
    render: function() {
        return <div>
            <h2>Contracts</h2>
            <Link to='home'>Home</Link>
            <p>This should show contracts</p>
        </div>;
    }
});

module.exports = Contracts;
