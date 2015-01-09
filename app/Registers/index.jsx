'use strict';
var React = require('react');
var Link = require('react-router').Link;


var Registers = React.createClass({
    render: function() {
        return <div>
            <h2>Registers</h2>
            <Link to='home'>Home</Link>
            <p>This should show registers</p>
        </div>;
    }
});

module.exports = Registers;
